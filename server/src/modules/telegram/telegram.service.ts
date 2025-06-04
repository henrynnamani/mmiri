import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;
  private sessions = new Map<number, {}>();
  constructor(private config: ConfigService) {}

  onModuleInit() {
    const token = this.config.get('bot.token');
    this.bot = new TelegramBot(token, { polling: true });

    this.initializeListeners();
  }

  private initializeListeners() {
    this.bot.onText(/\register/, (msg) => {
      const chatId = msg.chat.id;
      this.sessions.set(chatId, {});
      this.bot.sendMessage(chatId, 'What is your name')
    });
  }
}
