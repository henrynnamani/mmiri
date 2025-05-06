import { Test } from '@nestjs/testing';
import { VendorsService } from '../vendors.service';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { VendorModelAction } from '../model/vendors.model-action';
import { ConfigService } from '@nestjs/config';

export const mockVendorModelAction = {
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  list: jest.fn(),
};

export const mockLocationsService = {
  findLocationById: jest.fn(),
};

export const mockVendorLocationService = {
  addServingLocation: jest.fn(),
};

export const mockConfigService = {
  get: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      VendorsService,
      {
        provide: ConfigService,
        useValue: mockConfigService,
      },
      {
        provide: VendorModelAction,
        useValue: mockVendorModelAction,
      },
      {
        provide: LocationsService,
        useValue: mockLocationsService,
      },
      {
        provide: VendorLocationsService,
        useValue: mockVendorLocationService,
      },
    ],
  });
