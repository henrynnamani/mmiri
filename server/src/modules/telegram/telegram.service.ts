import { OrderStatus, Role } from '@modules/common/enums';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import TelegramBot from 'node-telegram-bot-api';
import * as SYS_MSG from '@modules/common/system-message';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { Order } from '@modules/order/model/order.model';
import { OrderService } from '@modules/order/order.service';
import { Lodge } from '@modules/lodges/model/lodges.model';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;
  private sessions = new Map<number, any>();
  constructor(
    private config: ConfigService,
    private vendorService: VendorsService,
    private locationsService: LocationsService,
    private vendorLocationService: VendorLocationsService,
    private lodgePriceService: LodgePriceService,
    @Inject(forwardRef(() => OrderService))
    private orderService: OrderService,
  ) {}

  onModuleInit() {
    const token = this.config.get('bot.token');
    const webhookUrl = this.config.get('bot.webhookUrl');

    this.bot = new TelegramBot(token);

    this.bot
      .setWebHook(`${webhookUrl}/telegram/webhook`)
      .then(() => {
        console.log('webhook set successfully');
      })
      .catch(console.error);

    this.bot.on('callback_query', async (callbackQuery) => {
      console.log('Received callback:', callbackQuery.data);
      const chatId = callbackQuery.message?.chat.id as number;
      const data = callbackQuery.data as string;

      const session = this.sessions.get(chatId);

      // if (!session) return;

      if (/^[0-9a-fA-F-]+:(od|dl|co)$/.test(data)) {
        const [orderId, actionCode] = data.split(':');

        const statusMap: Record<string, OrderStatus> = {
          od: OrderStatus.ON_DELIVERY,
          dl: OrderStatus.DELIVERED,
          co: OrderStatus.CANCELLED,
        };

        const newStatus = statusMap[actionCode];

        const updateStatus = await this.orderService.updateOrderStatus(
          orderId,
          newStatus,
        );

        if (!updateStatus) {
          const message =
            actionCode === 'od'
              ? 'Order is already on delivery'
              : 'Please wait, while user confirm delivery 📦.';
          await this.bot.sendMessage(chatId, message);
          return;
        }

        if (actionCode === 'od') {
          await this.bot.sendMessage(
            chatId,
            `Alright 👍, You will be remitted once order is delivered 🖖`,
          );
        } else if (actionCode === 'dl') {
          await this.bot.sendMessage(chatId, `💸 Order Completed!!!`);
        }

        await this.bot.answerCallbackQuery(callbackQuery.id);
        return;
      }

      if (data === 'confirm_bank') {
        this.bankConfirmationFlow(chatId, session);
      }

      if (data.startsWith('select_location:')) {
        const locationId = data.split(':')[1];
        this.selectLocationFlow(locationId, chatId, session);
      }

      if (!session.selectedLodges) {
        session.selectedLodges = [];
      }

      if (data === 'done_selecting_lodges') {
        this.doneSelectingLodgeFlow(session, chatId);
      }

      if (data.startsWith('toggle_lodge:')) {
        const lodgeId = data.split(':')[1];

        // Toggle selection
        this.toggleLocationFlow(lodgeId, session, chatId, callbackQuery);
      }
    });
  }

  public async toggleLocationFlow(
    lodgeId: string,
    session: any,
    chatId: number,
    callbackQuery: any,
  ) {
    const index = session.selectedLodges.indexOf(lodgeId);
    if (index > -1) {
      session.selectedLodges.splice(index, 1); // Deselect
    } else {
      session.selectedLodges.push(lodgeId); // Select
    }

    // Re-render updated lodge list
    const response = await this.locationsService.getLocationLodges(
      session.locationId,
    );
    await this.bot.editMessageReplyMarkup(
      {
        inline_keyboard: [
          ...response!.lodges.map((lodge) => {
            const selected = session.selectedLodges.includes(lodge.id);
            return [
              {
                text: `${selected ? '✅' : '⬜️'} ${lodge.name}`,
                callback_data: `toggle_lodge:${lodge.id}`,
              },
            ];
          }),
          [
            {
              text: '✅ Done Selecting',
              callback_data: 'done_selecting_lodges',
            },
          ],
        ],
      },
      {
        chat_id: chatId,
        message_id: callbackQuery.message?.message_id,
      },
    );

    return;
  }

  public async doneSelectingLodgeFlow(session: any, chatId: number) {
    if (session.selectedLodges.length === 0) {
      await this.bot.sendMessage(
        chatId,
        '⚠️ You need to select at least one lodge.',
      );
    } else {
      session.selectedLodges.map((lodgeId) => {
        this.lodgePriceService.setVendorLodge({ chatId, lodgeId });
      });
      await this.bot.sendMessage(
        chatId,
        `✅ You selected ${session.selectedLodges.length} lodge(s).`,
      );
      // Proceed to next step or confirmation
    }
    return;
  }

  public async selectLocationFlow(
    locationId: string,
    chatId: number,
    session: any,
  ) {
    session.locationId = locationId;
    const vendor = await this.vendorService.getVendorByChatId(chatId);
    const location = await this.locationsService.findLocationById(locationId);

    if (!vendor || !location)
      throw new BadRequestException(SYS_MSG.VENDOR_LOCATION_NOT_FOUND);

    try {
      await this.vendorLocationService.addServingLocation(vendor, location);
      await this.bot.sendMessage(chatId, 'Location activated ✅');
    } catch (err) {
      await this.bot.sendMessage(chatId, '🛑 You already serve this location');
      return;
    }

    const response = await this.locationsService.getLocationLodges(locationId);

    if (!response?.lodges.length) {
      await this.bot.sendMessage(
        chatId,
        '🚫 No lodges found in that location.',
      );
      return;
    }

    await this.bot.sendMessage(chatId, '🏨 Select Lodges you want to serve:', {
      reply_markup: {
        inline_keyboard: [
          ...response.lodges.map((lodge) => [
            {
              text: `⬜️ ${lodge.name}`,
              callback_data: `toggle_lodge:${lodge.id}`,
            },
          ]),
          [
            {
              text: '✅ Done Selecting',
              callback_data: 'done_selecting_lodges',
            },
          ],
        ],
      },
    });

    return;
  }

  public async bankConfirmationFlow(chatId: number, session: any) {
    await this.bot.sendMessage(chatId, 'Processing... ⏳');

    try {
      const payload = {
        email: session.email,
        phoneNumber: session.phone,
        accountNumber: session.account,
        bankCode: session.bank,
        businessName: session.name,
        role: Role.VENDOR,
        chatId: chatId,
        lodgeId: session.lodgeId, // include if already selected
      };

      await this.vendorService.registerVendor(payload);

      await this.bot.sendMessage(chatId, '✅ Vendor registration completed!.');
    } catch (err) {
      console.error(err);
      await this.bot.sendMessage(
        chatId,
        '❌ Something went wrong during registration.',
      );
    }

    this.sessions.delete(chatId);
    return;
  }

  public async handleWebhookUpdate(body: any) {
    this.bot.processUpdate(body);
    const message = body.message;
    if (!message) return;

    const chatId = message.chat.id;

    const text = message.text?.trim();

    if (text === '/register') {
      this.sessions.set(chatId, { step: 'name' });
      await this.bot.sendMessage(chatId, '📝 What is your business name?');
      return;
    }

    if (text === '/set-location') {
      // check if user has set location already

      this.sessions.set(chatId, { step: 'set_location' });
      const locations = await this.locationsService.getLocations();
      await this.bot.sendMessage(chatId, '🏨 Select a Location:', {
        reply_markup: {
          inline_keyboard: locations.payload.map((location) => [
            {
              text: location.name,
              callback_data: `select_location:${location.id}`,
            },
          ]),
        },
      });
      return;
    }

    const session = this.sessions.get(chatId);
    if (!session) return;

    // if (session.step === 'set_location') {
    //   console.log(message)
    //   session.location = message.text
    //   const vendor = await this.vendorService.getVendorByChatId(chatId);
    // }

    if (session?.step === 'phone' && message.contact) {
      console.log('I am here');
      if (message.contact.user_id !== message.from.id) {
        await this.bot.sendMessage(chatId, '⚠️ Please share your own contact.');
        return;
      }

      session.phone = message.contact.phone_number;
      session.step = 'email';

      await this.bot.sendMessage(chatId, '📧 What is your email address?', {
        reply_markup: { remove_keyboard: true },
      });

      return; // ✅ Done for contact step
    }

    if (session?.step === 'name') {
      session.name = text;
      session.step = 'phone';
      await this.bot.sendMessage(chatId, '📞 Please share your phone number:', {
        reply_markup: {
          keyboard: [[{ text: 'Share Contact', request_contact: true }]],
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });
    } else if (session.step === 'email') {
      session.email = text;
      session.step = 'bank';

      await this.bot.sendMessage(chatId, '📍 Select Bank:', {
        reply_markup: {
          keyboard: [[{ text: 'Opay' }, { text: 'Palmpay' }]],
          one_time_keyboard: true,
          resize_keyboard: true,
        },
      });
      // this.sessions.delete(chatId);
    } else if (session.step === 'bank') {
      session.bank = text === 'Opay' ? 999992 : 999991;
      session.step = 'account_number';

      await this.bot.sendMessage(chatId, '🏦 Enter your account number');
    } else if (session.step === 'account_number') {
      session.account = text;
      session.step = 'bank_confirmation';

      const response = await axios.get(
        `${this.config.get('paystack.baseUrl')}/bank/resolve?account_number=${session.account}&bank_code=${session.bank}`,
        {
          headers: {
            Authorization: `Bearer ${this.config.get('paystack.secretKey')}`,
          },
        },
      );

      await this.bot.sendMessage(
        chatId,
        `📍 Account Name: ${response.data.data.account_name}`,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: 'Confirm ✅', callback_data: 'confirm_bank' }],
            ],
          },
        },
      );
    } else if (session.step === 'bank_confirmation') {
      console.log('working!!!');
    }
  }

  public async notifyVendorOfOrder(chatId: number, order: Order, lodge: Lodge) {
    const message = `
    🛒 New Order Notification
    ----------------------------
    Phone Number: ${order.user?.phoneNumber}
    Lodge: ${lodge.name}, ${lodge.location.name}
    Room: ${order.roomNumber}
    Number of Gallon: ${order.noOfGallons}
    ----------------------------
    Please update the order status:
    `;

    await this.bot.sendMessage(chatId, message, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '✅ On Delivery',
              callback_data: `${order.id}:od`,
            },
          ],
          [
            {
              text: '📦 Delivered',
              callback_data: `${order.id}:dl`,
            },
          ],
          [
            {
              text: '❌ Cancel Order',
              callback_data: `${order.id}:co`,
            },
          ],
        ],
      },
    });
  }
}
