import { Test } from '@nestjs/testing';
import { VendorsService } from '@modules/vendors/vendors.service';
import { LodgePriceService } from '../lodge_price.service';
import { LodgePriceModelAction } from '../model/lodge_price.model-action';
import { LodgesService } from '@modules/lodges/lodges.service';

export const mockLodgePriceModelAction = {
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  list: jest.fn(),
};

export const mockLodgesService = {
  getLodgeById: jest.fn(),
};

export const mockVendorsService = {
  getVendorById: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      LodgePriceService,
      {
        provide: LodgesService,
        useValue: mockLodgesService,
      },
      {
        provide: LodgePriceModelAction,
        useValue: mockLodgePriceModelAction,
      },
      {
        provide: VendorsService,
        useValue: mockVendorsService,
      },
    ],
  });
