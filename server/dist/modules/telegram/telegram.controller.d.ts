import { TelegramService } from './telegram.service';
export declare class TelegramController {
    private readonly telegramService;
    constructor(telegramService: TelegramService);
    receiveUpdate(body: any): Promise<{
        ok: boolean;
    }>;
}
