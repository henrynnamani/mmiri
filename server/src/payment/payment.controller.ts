import { Body, Controller, Headers, Post, Req, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { InitializePaymentDto } from './dto/initializePayment.dto';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { skipAuth } from '@/common/decorators/is-public.decorator';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('initiate-payment')
  initiatePayment(@Body() paymentDto: InitializePaymentDto, @Req() req) {
    const loggedInUser = req.user.sub;

    return this.paymentService.initiatePayment(loggedInUser, paymentDto);
  }
}

@skipAuth()
@Controller('webhook')
export class PaystackController {
  constructor(private config: ConfigService) {}
  @Post()
  handleWebhook(
    @Headers('x-paystack-signature') signature: string,
    @Body() rawBody: Buffer,
    @Req() req,
    @Res() res,
  ) {
    const secret = this.config.get<string>('paystack.secretKey');
    const hash = crypto
      .createHmac('sha512', secret!)
      .update(JSON.stringify(req.body))
      .digest('hex');

    console.log(secret);
    if (hash == req.headers['x-paystack-signature']) {
      // Retrieve the request's body
      const event = req.body;
      console.log(event);
      if (event === 'charge.success') {
        const paymentData = req.body.data;
        // Handle successful payment
        console.log(paymentData);
      }
    }
    res.send(200);
  }
}
