import {
  BadRequestException,
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

@Injectable()
export class OrderService {
  constructor(
    private orderModelAction: OrderModelAction,
    private usersService: UsersService,
    private vendorsService: VendorsService,
  ) {}

  async placeOrder(orderDto: OrderDto) {
    const vendorExist = await this.vendorsService.getVendorById(
      orderDto.vendorId,
    );

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const userExist = await this.usersService.getUserById(orderDto.userId);

    if (!userExist) {
      throw new NotFoundException(SYS_MSG.USER_NOT_FOUND);
    }

    const order = await this.orderModelAction.create({
      createPayload: {
        amountPayed: orderDto.totalAmount,
        noOfGallons: orderDto.noOfGallons,
        vendor: vendorExist,
        user: userExist,
        paymentReference: orderDto.paymentReference,
      },
      transactionOptions: {
        useTransaction: false,
      },
    });

    return {
      data: order,
      message: SYS_MSG.ORDER_PLACED_SUCCESSFULLY,
    };
  }

  async getOrderByReference(reference: string) {
    return this.orderModelAction.get({
      getRecordIdentifierOption: { paymentReference: reference },
    });
  }

  async updateOrderStatus(reference: string, status: boolean = true) {
    const orderExist = await this.getOrderByReference(reference);

    if (!orderExist) {
      throw new NotFoundException(SYS_MSG.ORDER_NOT_FOUND);
    }

    await this.orderModelAction.update({
      identifierOptions: { id: orderExist.id },
      updatePayload: {
        paymentStatus: status,
      },
      transactionOption: {
        useTransaction: false,
      },
    });

    const updatedOrder = await this.orderModelAction.get({
      getRecordIdentifierOption: { id: orderExist.id },
    });

    if (updatedOrder?.paymentStatus !== status) {
      throw new BadRequestException(SYS_MSG.ORDER_STATUS_NOT_UPDATED);
    }

    return {
      data: updatedOrder,
      message: SYS_MSG.ORDER_STATUS_UPDATED_SUCCESSFULLY,
    };
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
