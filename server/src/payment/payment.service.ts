import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import { ConfigService } from '@nestjs/config';
import * as SYS_MSG from '@/common/system-message';
import axios from 'axios';

@Injectable()
export class PaymentService {
  paystackBaseUrl: string | undefined;
  constructor(private readonly config: ConfigService) {
    this.paystackBaseUrl = this.config.get<string>('paystack.baseUrl');
  }

  async initiatePayment(paymentDto: InitializePaymentDto) {
    try {
      const response = await axios.post(
        `${this.paystackBaseUrl}/transaction/initialize`,
        paymentDto,
        {
          headers: {
            Authorization: `Bearer ${this.config.get<string>('paystack.secretKey')}`,
            'Content-Type': 'application/json',
          },
        },
      );

      return response.data;
    } catch {
      throw new HttpException(
        SYS_MSG.ERROR_INITIATING_PAYMENT_TRANSACTION,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
