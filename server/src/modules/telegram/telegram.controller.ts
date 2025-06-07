import { Body, Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { skipAuth } from '@modules/common/decorators/is-public.decorator';

@skipAuth()
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('webhook')
  async receiveUpdate(@Body() body: any) {
    await this.telegramService.handleWebhookUpdate(body);
    return { ok: true };
  }
}
