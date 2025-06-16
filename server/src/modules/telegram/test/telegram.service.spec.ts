import { Test, TestingModule } from '@nestjs/testing';
import { testingModule } from './base.test';
import { TelegramService } from '../telegram.service';

describe('TelegramService', () => {
  let service: TelegramService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<TelegramService>(TelegramService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
