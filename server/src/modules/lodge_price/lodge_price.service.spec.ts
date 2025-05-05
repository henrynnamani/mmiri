import { Test, TestingModule } from '@nestjs/testing';
import { LodgePriceService } from './lodge_price.service';

describe('LodgePriceService', () => {
  let service: LodgePriceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LodgePriceService],
    }).compile();

    service = module.get<LodgePriceService>(LodgePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
