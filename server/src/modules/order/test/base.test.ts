import { Test } from '@nestjs/testing';
import { OrderService } from '../order.service';
import { OrderModelAction } from '../model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { VendorsService } from '@modules/vendors/vendors.service';

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

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      OrderService,
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
