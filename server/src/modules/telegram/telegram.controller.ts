import { Body, Controller, Post } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { skipAuth } from '@modules/common/decorators/is-public.decorator';

@skipAuth()
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('webhook')
  create(@Body() body: any) {
    const message = body.message;

    if (!message || !message.text) return;

    const text = message.text;
    // return this.telegramService.create();

  }
}
