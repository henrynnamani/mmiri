import { Body, Controller, Headers, Post, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('initiate-payment')
  initiatePayment(@Body() paymentDto: InitializePaymentDto) {
    return this.paymentService.initiatePayment(paymentDto);
  }
}

@Controller('webhook')
export class PaystackController {
  constructor(private config: ConfigService) {}
  @Post()
  handleWebhook(
    @Headers('x-paystack-signature') signature: string,
    @Body() body: any,
    @Res() res,
  ) {
    const secret = this.config.get<string>('paystack.secretKey');
    const hash = crypto
      .createHmac('sha512', secret!)
      .update(JSON.stringify(body))
      .digest('hex');

    if (hash === signature) {
      // ✅ Valid webhook
      if (body.event === 'charge.success') {
        const paymentData = body.data;
        // Handle successful payment
        console.log(paymentData);
      }
    }

    return res.sendStatus(200);
  }
}
