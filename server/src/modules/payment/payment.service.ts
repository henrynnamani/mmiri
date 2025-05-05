import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import { ConfigService } from '@nestjs/config';
import * as SYS_MSG from '@modules/common/system-message';
import axios from 'axios';
import { OrderService } from '@modules/order/order.service';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { UsersService } from '@modules/users/users.service';
import { SERVICE_CHARGE } from '@modules/common/constants';

@Injectable()
export class PaymentService {
  paystackBaseUrl: string | undefined;
  paystackSecretKey: string | undefined;

  constructor(
    private readonly config: ConfigService,
    private readonly orderService: OrderService,
    private readonly lodgePriceService: LodgePriceService,
    private readonly usersService: UsersService,
  ) {
    this.paystackBaseUrl = this.config.get<string>('paystack.baseUrl');
    this.paystackSecretKey = this.config.get<string>('paystack.secretKey');
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

      console.log(lodgeCharge);

      const paymentPayload = {
        email: user.email,
        amount: this.computePaymentAmount(
          lodgeCharge.price,
          paymentDto.noOfGallons,
        ),
        subaccount: lodgeCharge.vendor.subaccount,
        transaction_charge: SERVICE_CHARGE * 100,
      };

      const response = await axios.post(
        `${this.paystackBaseUrl}/transaction/initialize`,
        paymentPayload,
        {
          headers: {
            Authorization: `Bearer ${this.paystackSecretKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const orderPayload = {
        userId: loggedInUser,
        vendorId: paymentDto.vendorId,
        noOfGallons: paymentDto.noOfGallons,
        totalAmount: paymentPayload.amount / 100,
        paymentReference: response.data.data.reference,
      };

      await this.orderService.placeOrder(orderPayload);

      return response.data;
    } catch (err) {
      console.log(err);
      throw new HttpException(
        SYS_MSG.ERROR_INITIATING_PAYMENT_TRANSACTION,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  computePaymentAmount(lodgeCharge: number, noOfGallons: number) {
    return (lodgeCharge * noOfGallons + SERVICE_CHARGE) * 100;
  }
}

// it is well
