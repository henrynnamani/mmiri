import { Test } from '@nestjs/testing';
import { UsersService } from '@modules/users/users.service';
import { PaymentService } from '../payment.service';
import { OrderService } from '@modules/order/order.service';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { ConfigService } from '@nestjs/config';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { PaymentModelAction } from '../model/payment.model-action';
import { LodgesService } from '@modules/lodges/lodges.service';

export const mockOrderService = {
  placeOrder: jest.fn(),
};

export const mockLodgePriceService = {
  getLodgePrice: jest.fn(),
};

export const mockUsersService = {
  getUserById: jest.fn(),
};

export const mockVendorsService = {
  getVendorByChatId: jest.fn(),
};

export const mockLocationsService = {
  getUserById: jest.fn(),
};

export const mockLodgesService = {
  getLodgeLocationPrice: jest.fn(),
};

export const mockPaymentModelAction = {
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
};

export const mockConfigService = {
  get: jest.fn((key: string) => {
    if (key === 'paystack.baseUrl') return 'https://api.paystack.co';
    if (key === 'paystack.secretKey') return 'sk_test_secret';
  }),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      PaymentService,
      {
        provide: ConfigService,
        useValue: mockConfigService,
      },
      {
        provide: LodgesService,
        useValue: mockLodgesService,
      },
      {
        provide: PaymentModelAction,
        useValue: mockPaymentModelAction,
      },
      {
        provide: VendorsService,
        useValue: mockVendorsService,
      },
      {
        provide: LocationsService,
        useValue: mockLocationsService,
      },
      {
        provide: OrderService,
        useValue: mockOrderService,
      },
      {
        provide: UsersService,
        useValue: mockUsersService,
      },
      {
        provide: LodgePriceService,
        useValue: mockLodgePriceService,
      },
    ],
  });
