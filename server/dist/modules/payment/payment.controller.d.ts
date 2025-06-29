import { PaymentService } from './payment.service';
import { ConfigService } from '@nestjs/config';
import { TelegramService } from '@modules/telegram/telegram.service';
import { OrderService } from '@modules/order/order.service';
import { LodgesService } from '@modules/lodges/lodges.service';
export declare class PaystackController {
    private config;
    private paymentService;
    private telegramService;
    private orderService;
    private lodgeService;
    constructor(config: ConfigService, paymentService: PaymentService, telegramService: TelegramService, orderService: OrderService, lodgeService: LodgesService);
    handleWebhook(signature: string, rawBody: Buffer, req: any, res: any): Promise<{
        data: null;
        message: string;
    }>;
}
