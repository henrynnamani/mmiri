import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { VendorsService } from '@/vendors/vendors.service';
import * as SYS_MSG from '@/common/system-message';
import { OrderModelAction } from './model/order.model-action';
import { UsersService } from '@/users/users.service';
import { LodgePriceService } from '@/lodge_price/lodge_price.service';
import { SERVICE_CHARGE } from '@/common/constants';

@Injectable()
export class OrderService {
  constructor(
    private vendorsService: VendorsService,
    private orderModelAction: OrderModelAction,
    private usersService: UsersService,
    private lodgePriceService: LodgePriceService,
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

    const price = await this.lodgePriceService.getLodgePrice(
      orderDto.vendorId,
      userExist.lodgeId,
    );

    const totalPayment = this.computeOrderTotal(
      price!.price,
      orderDto.noOfGallons,
    );

    const order = await this.orderModelAction.create({
      createPayload: {
        amountPayed: totalPayment,
        noOfGallons: orderDto.noOfGallons,
        vendor: vendorExist,
        user: userExist,
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

  private computeOrderTotal(charge: number, noOfGallon: number) {
    return charge * noOfGallon + SERVICE_CHARGE;
  }
}
