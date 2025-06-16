import { Test } from '@nestjs/testing';
import { UsersService } from '@modules/users/users.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { TelegramService } from '@modules/telegram/telegram.service';
import { ConfigService } from '@nestjs/config';
import { mockVendor } from '@modules/lodge_price/test/mock.test';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { OrderService } from '@modules/order/order.service';

export const mockVendorService = {};

export const mockLocationsService = {
  getUserById: jest.fn(),
};

export const mockConfigService = {
  get: jest.fn(),
};

export const mockVendorLocationService = {};

export const mockLodgePriceService = {};

export const mockOrderService = {};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      TelegramService,
      {
        provide: ConfigService,
        useValue: mockConfigService,
      },
      {
        provide: VendorsService,
        useValue: mockVendor,
      },
      {
        provide: LocationsService,
        useValue: mockLocationsService,
      },
      {
        provide: VendorLocationsService,
        useValue: mockVendorLocationService,
      },
      {
        provide: LodgePriceService,
        useValue: mockLodgePriceService,
      },
      {
        provide: OrderService,
        useValue: mockOrderService,
      },
    ],
  });
