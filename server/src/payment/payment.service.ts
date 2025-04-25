import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import { ConfigService } from '@nestjs/config';
import * as SYS_MSG from '@/common/system-message';
import axios from 'axios';
import { OrderService } from '@/order/order.service';
import { LodgePriceService } from '@/lodge_price/lodge_price.service';
import { UsersService } from '@/users/users.service';
import { SERVICE_CHARGE } from '@/common/constants';

@Injectable()
export class PaymentService {
  paystackBaseUrl: string | undefined;
  constructor(
    private readonly config: ConfigService,
    private readonly orderService: OrderService,
    private readonly lodgePriceService: LodgePriceService,
    private readonly usersService: UsersService,
  ) {
    this.paystackBaseUrl = this.config.get<string>('paystack.baseUrl');
  }

  async initiatePayment(
    loggedInUser: string,
    paymentDto: InitializePaymentDto,
  ) {
    try {
      const user = await this.usersService.getUserById(loggedInUser);

      if (!user) {
        throw new HttpException(SYS_MSG.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
      }

      const lodgeCharge = await this.lodgePriceService.getLodgePrice(
        paymentDto.vendorId,
        user.lodgeId,
      );

      const paymentPayload = {
        email: paymentDto.email,
        amount:
          (lodgeCharge!.price * paymentDto.noOfGallons + SERVICE_CHARGE) * 100,
      };

      const response = await axios.post(
        `${this.paystackBaseUrl}/transaction/initialize`,
        paymentPayload,
        {
          headers: {
            Authorization: `Bearer ${this.config.get<string>('paystack.secretKey')}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const orderPayload = {
        userId: loggedInUser,
        vendorId: paymentDto.vendorId,
        noOfGallons: paymentDto.noOfGallons,
      };

      await this.orderService.placeOrder(orderPayload);

      return response.data;
    } catch {
      throw new HttpException(
        SYS_MSG.ERROR_INITIATING_PAYMENT_TRANSACTION,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
