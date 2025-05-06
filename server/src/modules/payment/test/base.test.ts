import { Test } from '@nestjs/testing';
import { UsersService } from '@modules/users/users.service';
import { PaymentService } from '../payment.service';
import { OrderService } from '@modules/order/order.service';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { ConfigService } from '@nestjs/config';

export const mockOrderService = {
  placeOrder: jest.fn(),
};

export const mockLodgePriceService = {
  getLodgePrice: jest.fn(),
};

export const mockUsersService = {
  getUserById: jest.fn(),
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
