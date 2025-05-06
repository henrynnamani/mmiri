import { Test } from '@nestjs/testing';
import { VendorLocationsService } from '../vendor_locations.service';
import { VendorLocationModelAction } from '../model/vendor_locations.model-action';

export const mockVendorLocationModelAction = {
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  list: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      VendorLocationsService,
      {
        provide: VendorLocationModelAction,
        useValue: mockVendorLocationModelAction,
      },
    ],
  });
