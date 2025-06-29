"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const enums_1 = require("../common/enums");
const locations_service_1 = require("../locations/locations.service");
const vendor_locations_service_1 = require("../vendor_locations/vendor_locations.service");
const vendors_service_1 = require("../vendors/vendors.service");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = __importDefault(require("axios"));
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const SYS_MSG = __importStar(require("../common/system-message"));
const lodge_price_service_1 = require("../lodge_price/lodge_price.service");
const order_service_1 = require("../order/order.service");
let TelegramService = class TelegramService {
    config;
    vendorService;
    locationsService;
    vendorLocationService;
    lodgePriceService;
    orderService;
    bot;
    sessions = new Map();
    constructor(config, vendorService, locationsService, vendorLocationService, lodgePriceService, orderService) {
        this.config = config;
        this.vendorService = vendorService;
        this.locationsService = locationsService;
        this.vendorLocationService = vendorLocationService;
        this.lodgePriceService = lodgePriceService;
        this.orderService = orderService;
    }
    onModuleInit() {
        const token = this.config.get('bot.token');
        const webhookUrl = this.config.get('bot.webhookUrl');
        this.bot = new node_telegram_bot_api_1.default(token);
        this.bot
            .setWebHook(`${webhookUrl}/telegram/webhook`)
            .then(() => {
            console.log('webhook set successfully');
        })
            .catch(console.error);
        this.bot.on('callback_query', async (callbackQuery) => {
            console.log('Received callback:', callbackQuery.data);
            const chatId = callbackQuery.message?.chat.id;
            const data = callbackQuery.data;
            const session = this.sessions.get(chatId);
            if (/^[0-9a-fA-F-]+:(od|dl|co)$/.test(data)) {
                const [orderId, actionCode] = data.split(':');
                const statusMap = {
                    od: enums_1.OrderStatus.ON_DELIVERY,
                    dl: enums_1.OrderStatus.DELIVERED,
                    co: enums_1.OrderStatus.CANCELLED,
                };
                const newStatus = statusMap[actionCode];
                const updateStatus = await this.orderService.updateOrderStatus(orderId, newStatus);
                if (!updateStatus) {
                    const message = actionCode === 'od'
                        ? 'Order is already on delivery'
                        : 'Please wait, while user confirm delivery 📦.';
                    await this.bot.sendMessage(chatId, message);
                    return;
                }
                if (actionCode === 'od') {
                    await this.bot.sendMessage(chatId, `Alright 👍, You will be remitted once order is delivered 🖖`);
                }
                else if (actionCode === 'dl') {
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
                this.toggleLocationFlow(lodgeId, session, chatId, callbackQuery);
            }
        });
    }
    async toggleLocationFlow(lodgeId, session, chatId, callbackQuery) {
        const index = session.selectedLodges.indexOf(lodgeId);
        if (index > -1) {
            session.selectedLodges.splice(index, 1);
        }
        else {
            session.selectedLodges.push(lodgeId);
        }
        const response = await this.locationsService.getLocationLodges(session.locationId);
        await this.bot.editMessageReplyMarkup({
            inline_keyboard: [
                ...response.lodges.map((lodge) => {
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
        }, {
            chat_id: chatId,
            message_id: callbackQuery.message?.message_id,
        });
        return;
    }
    async doneSelectingLodgeFlow(session, chatId) {
        if (session.selectedLodges.length === 0) {
            await this.bot.sendMessage(chatId, '⚠️ You need to select at least one lodge.');
        }
        else {
            session.selectedLodges.map((lodgeId) => {
                this.lodgePriceService.setVendorLodge({ chatId, lodgeId });
            });
            await this.bot.sendMessage(chatId, `✅ You selected ${session.selectedLodges.length} lodge(s).`);
        }
        return;
    }
    async selectLocationFlow(locationId, chatId, session) {
        session.locationId = locationId;
        const vendor = await this.vendorService.getVendorByChatId(chatId);
        const location = await this.locationsService.findLocationById(locationId);
        if (!vendor || !location)
            throw new common_1.BadRequestException(SYS_MSG.VENDOR_LOCATION_NOT_FOUND);
        try {
            await this.vendorLocationService.addServingLocation(vendor, location);
            await this.bot.sendMessage(chatId, 'Location activated ✅');
        }
        catch (err) {
            await this.bot.sendMessage(chatId, '🛑 You already serve this location');
            return;
        }
        const response = await this.locationsService.getLocationLodges(locationId);
        if (!response?.lodges.length) {
            await this.bot.sendMessage(chatId, '🚫 No lodges found in that location.');
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
    async bankConfirmationFlow(chatId, session) {
        await this.bot.sendMessage(chatId, 'Processing... ⏳');
        try {
            const payload = {
                email: session.email,
                phoneNumber: session.phone,
                accountNumber: session.account,
                bankCode: session.bank,
                businessName: session.name,
                role: enums_1.Role.VENDOR,
                chatId: chatId,
                lodgeId: session.lodgeId,
            };
            await this.vendorService.registerVendor(payload);
            await this.bot.sendMessage(chatId, '✅ Vendor registration completed!.');
        }
        catch (err) {
            console.error(err);
            await this.bot.sendMessage(chatId, '❌ Something went wrong during registration.');
        }
        this.sessions.delete(chatId);
        return;
    }
    async handleWebhookUpdate(body) {
        this.bot.processUpdate(body);
        const message = body.message;
        if (!message)
            return;
        const chatId = message.chat.id;
        const text = message.text?.trim();
        if (text === '/register') {
            this.sessions.set(chatId, { step: 'name' });
            await this.bot.sendMessage(chatId, '📝 What is your business name?');
            return;
        }
        if (text === '/set-location') {
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
        if (!session)
            return;
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
            return;
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
        }
        else if (session.step === 'email') {
            session.email = text;
            session.step = 'bank';
            await this.bot.sendMessage(chatId, '📍 Select Bank:', {
                reply_markup: {
                    keyboard: [[{ text: 'Opay' }, { text: 'Palmpay' }]],
                    one_time_keyboard: true,
                    resize_keyboard: true,
                },
            });
        }
        else if (session.step === 'bank') {
            session.bank = text === 'Opay' ? 999992 : 999991;
            session.step = 'account_number';
            await this.bot.sendMessage(chatId, '🏦 Enter your account number');
        }
        else if (session.step === 'account_number') {
            session.account = text;
            session.step = 'bank_confirmation';
            const response = await axios_1.default.get(`${this.config.get('paystack.baseUrl')}/bank/resolve?account_number=${session.account}&bank_code=${session.bank}`, {
                headers: {
                    Authorization: `Bearer ${this.config.get('paystack.secretKey')}`,
                },
            });
            await this.bot.sendMessage(chatId, `📍 Account Name: ${response.data.data.account_name}`, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'Confirm ✅', callback_data: 'confirm_bank' }],
                    ],
                },
            });
        }
        else if (session.step === 'bank_confirmation') {
            console.log('working!!!');
        }
    }
    async notifyVendorOfOrder(chatId, order, lodge) {
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
};
exports.TelegramService = TelegramService;
exports.TelegramService = TelegramService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, common_1.Inject)((0, common_1.forwardRef)(() => order_service_1.OrderService))),
    __metadata("design:paramtypes", [config_1.ConfigService,
        vendors_service_1.VendorsService,
        locations_service_1.LocationsService,
        vendor_locations_service_1.VendorLocationsService,
        lodge_price_service_1.LodgePriceService,
        order_service_1.OrderService])
], TelegramService);
//# sourceMappingURL=telegram.service.js.map