import { TestingModule } from '@nestjs/testing';
import {
  mockLodgePriceModelAction,
  mockLodgesService,
  mockVendorsService,
  testingModule,
} from './base.test';
import { LodgePriceService } from '../lodge_price.service';
import * as SYS_MSG from '@modules/common/system-message';
import { NotFoundException } from '@nestjs/common';
import {
  mockLodge,
  mockResponse,
  mockSetLodgeChargeDto,
  mockVendor,
} from './mock.test';

describe('LodgePriceService', () => {
  let service: LodgePriceService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<LodgePriceService>(LodgePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
