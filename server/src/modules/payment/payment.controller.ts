import {
  Body,
  Controller,
  Headers,
  NotFoundException,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';
import { skipAuth } from '@modules/common/decorators/is-public.decorator';
import { TelegramService } from '@modules/telegram/telegram.service';
import { OrderService } from '@modules/order/order.service';
import * as SYS_MSG from '@modules/common/system-message';

@skipAuth()
@Controller('webhook')
export class PaystackController {
  constructor(
    private config: ConfigService,
    private paymentService: PaymentService,
    private telegramService: TelegramService,
    private orderService: OrderService,
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
        // const lodgeId: string = body.data.metadata?.lodgeId;

        const response = await this.orderService.getOrderById(orderId);

        if (!response) {
          throw new NotFoundException(SYS_MSG.ORDER_NOT_FOUND);
        }

        console.log('I truly hit');

        await this.paymentService.updatePaymentRecord(
          orderId,
          body?.data?.reference,
          true,
        );

        await this.telegramService.notifyVendorOfOrder(
          Number(response?.vendor.chatId),
          response,
        );
      }
    }

    return {
      data: null,
      message: 'Payment successful',
    };
  }
}
