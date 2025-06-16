import { Test } from '@nestjs/testing';
import { OrderService } from '../order.service';
import { OrderModelAction } from '../model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { VendorsService } from '@modules/vendors/vendors.service';
import { TelegramService } from '@modules/telegram/telegram.service';
import { PaymentService } from '@modules/payment/payment.service';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';

export const mockOrderModelAction = {
  create: jest.fn(),
  get: jest.fn(),
  update: jest.fn(),
  list: jest.fn(),
};

export const mockUsersService = {
  getUserById: jest.fn(),
};

export const mockVendorsService = {
  getVendorById: jest.fn(),
};

export const mockTelegramService = {
  notifyVendorOfOrder: jest.fn(),
};

export const mockPaymentService = {
  initiatePayment: jest.fn(),
};

export const mockLodgePriceModelAction = {
  findAvailableVendorsByLodge: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      OrderService,
      {
        provide: PaymentService,
        useValue: mockPaymentService,
      },
      {
        provide: LodgePriceModelAction,
        useValue: mockLodgePriceModelAction,
      },
      {
        provide: TelegramService,
        useValue: mockTelegramService,
      },
      {
        provide: OrderModelAction,
        useValue: mockOrderModelAction,
      },
      {
        provide: UsersService,
        useValue: mockUsersService,
      },
      {
        provide: VendorsService,
        useValue: mockVendorsService,
      },
    ],
  });
