import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { VendorsService } from '@modules/vendors/vendors.service';
import * as SYS_MSG from '@modules/common/system-message';
import { OrderModelAction } from './model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { PaginationMeta } from '@modules/common/types/list-record.type';
import { OrderStatus } from '@modules/common/enums';
import { TelegramService } from '@modules/telegram/telegram.service';
import { PaymentService } from '@modules/payment/payment.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class OrderService {
  constructor(
    private orderModelAction: OrderModelAction,
    private usersService: UsersService,
    private vendorsService: VendorsService,
    @Inject(forwardRef(() => TelegramService))
    private telegramService: TelegramService,
    @Inject(forwardRef(() => PaymentService))
    private paymentService: PaymentService,
  ) {}

  async placeOrder(loggedInUserId: string, orderDto: OrderDto) {
    const userExist = await this.usersService.getUserById(loggedInUserId);

    if (!userExist) {
      throw new NotFoundException(SYS_MSG.USER_NOT_FOUND);
    }

    const order = await this.orderModelAction.create({
      createPayload: {
        noOfGallons: orderDto.noOfGallons,
        roomNumber: orderDto.roomNumber,
        user: userExist,
      },
      transactionOptions: {
        useTransaction: false,
      },
    });

    // initiate payment with orderId
    const response = await this.paymentService.initiatePayment(userExist, {
      noOfGallons: orderDto.noOfGallons,
      orderId: order.id,
      lodgeId: orderDto.lodgeId,
    });

    // await this.telegramService.notifyVendorOfOrder(vendorExist.chatId, order)

    return {
      data: response,
      message: SYS_MSG.ORDER_PLACED_SUCCESSFULLY,
    };
  }

  async getOrderByReference(reference: string) {
    return this.orderModelAction.get({
      getRecordIdentifierOption: { paymentReference: reference },
    });
  }

  async getUserOrders(
    id: string,
    pagination: Pick<PaginationMeta, 'page' | 'limit'>,
  ) {
    return this.orderModelAction.list({
      queryOption: { userId: id, status: OrderStatus.PENDING },
      pagination,
    });
  }

  async getVendorOrders(
    id: string,
    pagination: Pick<PaginationMeta, 'page' | 'limit'>,
  ) {
    return this.orderModelAction.list({
      queryOption: { vendorId: id, status: OrderStatus.PENDING },
      pagination,
    });
  }
}
