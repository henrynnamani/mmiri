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
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Not } from 'typeorm';

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
    private lodgePriceModelAction: LodgePriceModelAction,
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

    const vendors: Vendor[] =
      await this.lodgePriceModelAction.findAvailableVendorsByLodge(
        orderDto.lodgeId,
      );

    if (!vendors) {
      const response = await this.paymentService.initiatePayment(userExist, {
        noOfGallons: orderDto.noOfGallons,
        orderId: order.id,
        lodgeId: orderDto.lodgeId,
      });
      return {
        data: response,
        message: SYS_MSG.ORDER_PLACED_SUCCESSFULLY,
      };
    }

    const selectedVendor = vendors[0];

    await this.assignVendorToOrder(order?.id, selectedVendor.id);

    // initiate payment with orderId
    const response = await this.paymentService.initiatePayment(userExist, {
      noOfGallons: orderDto.noOfGallons,
      orderId: order.id,
      lodgeId: orderDto.lodgeId,
      subaccount: selectedVendor?.subaccount,
    });

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

  async getOrderById(orderId: string) {
    return this.orderModelAction.get({
      getRecordIdentifierOption: { id: orderId },
      relations: ['user', 'vendor', 'user.lodge'],
    });
  }

  async getUserOrders(id: string) {
    return this.orderModelAction.list({
      queryOption: {
        userId: id,
        status: Not(OrderStatus.COMPLETED),
      },
      pagination: {
        limit: 5,
        page: 1,
      },
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

  async assignVendorToOrder(orderId: string, vendorId: string) {
    const response = await this.orderModelAction.update({
      identifierOptions: {
        id: orderId,
      },
      updatePayload: {
        vendorId,
        status: OrderStatus.ASSIGNED,
      },
      transactionOption: {
        useTransaction: false,
      },
    });

    return {
      data: response,
    };
  }

  async updateOrderStatus(orderId: string, status: OrderStatus) {
    const order = await this.orderModelAction.get({
      getRecordIdentifierOption: { id: orderId },
    });

    if (order?.status === status) {
      return false;
    }

    await this.orderModelAction.update({
      identifierOptions: { id: orderId },
      updatePayload: {
        status,
      },
      transactionOption: {
        useTransaction: false,
      },
    });

    return true;
  }
}
