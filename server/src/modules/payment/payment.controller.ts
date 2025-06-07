import { Body, Controller, Headers, Post, Req, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { skipAuth } from '@modules/common/decorators/is-public.decorator';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // @InitiatePaymentDoc()
  // initiatePayment(@Body() paymentDto: InitializePaymentDto, @Req() req) {
  //   const loggedInUser = req.user.sub;

  //   return this.paymentService.initiatePayment(loggedInUser, paymentDto);
  // }
}

@skipAuth()
@Controller('webhook')
export class PaystackController {
  constructor(
    private config: ConfigService,
    private paymentService: PaymentService,
    @InjectQueue('assign-vendor') private orderQueue: Queue,
  ) {}
  @Post()
  async handleWebhook(
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

    res.status(200).send('OK');

    if (hash == req.headers['x-paystack-signature']) {
      const body = req.body;
      if (body.event === 'charge.success') {
        const orderId: string = body.data.metadata?.orderId;

        await this.paymentService.updatePaymentRecord(
          orderId,
          body?.data?.reference,
          true,
        );

        await this.orderQueue.add('assign-vendor', {
          orderId,
        });
      }
    }

    return {
      data: null,
      message: 'Payment successful',
    };
  }
}
