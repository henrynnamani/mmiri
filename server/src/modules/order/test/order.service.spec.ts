import { TestingModule } from '@nestjs/testing';
import {
  mockLodgePriceModelAction,
  mockOrderModelAction,
  mockPaymentService,
  mockUsersService,
  mockVendorsService,
  testingModule,
} from './base.test';
import { OrderService } from '../order.service';
import * as SYS_MSG from '@modules/common/system-message';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  mockOrder,
  mockPlaceOrderDto,
  mockUser,
  mockVendor,
} from './mock.test';
import { OrderStatus } from '@modules/common/enums';

describe('OrderService', () => {
  let service: OrderService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<OrderService>(OrderService);
  });

  afterEach(() => jest.clearAllMocks());

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('placeOrder', () => {
    it('should throw if user not found', async () => {
      (mockUsersService.getUserById as jest.Mock).mockResolvedValue(null);
      await expect(
        service.placeOrder('user-id', {
          noOfGallons: 5,
          roomNumber: '101',
          lodgeId: 'lodge1',
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should create order and assign vendor', async () => {
      const user = { id: 'user-id' };
      const order = { id: 'order-id' };
      const vendor = { id: 'vendor-id', subaccount: 'acct_123' };

      (mockUsersService.getUserById as jest.Mock).mockResolvedValue(user);
      (mockOrderModelAction.create as jest.Mock).mockResolvedValue(order);
      (
        mockLodgePriceModelAction.findAvailableVendorsByLodge as jest.Mock
      ).mockResolvedValue([vendor]);
      (mockOrderModelAction.update as jest.Mock).mockResolvedValue({});
      (mockPaymentService.initiatePayment as jest.Mock).mockResolvedValue({
        checkoutUrl: 'paylink.com',
      });

      const result = await service.placeOrder('user-id', {
        noOfGallons: 5,
        roomNumber: '101',
        lodgeId: 'lodge1',
      });

      expect(result.message).toBe(SYS_MSG.ORDER_PLACED_SUCCESSFULLY);
      expect(result.data.checkoutUrl).toBeDefined();
    });

    it('should create order without assigning vendor if no vendor found', async () => {
      const user = { id: 'user-id' };
      const order = { id: 'order-id' };

      (mockUsersService.getUserById as jest.Mock).mockResolvedValue(user);
      (mockOrderModelAction.create as jest.Mock).mockResolvedValue(order);
      (
        mockLodgePriceModelAction.findAvailableVendorsByLodge as jest.Mock
      ).mockResolvedValue(null);
      (mockPaymentService.initiatePayment as jest.Mock).mockResolvedValue({
        checkoutUrl: 'paylink.com',
      });

      const result = await service.placeOrder('user-id', {
        noOfGallons: 5,
        roomNumber: '101',
        lodgeId: 'lodge1',
      });

      expect(result.data.checkoutUrl).toBeDefined();
    });
  });

  describe('getOrderByReference', () => {
    it('should return order by reference', async () => {
      (mockOrderModelAction.get as jest.Mock).mockResolvedValue({
        id: 'order1',
      });
      const result = await service.getOrderByReference('ref123');
      expect(result!.id).toBe('order1');
    });
  });

  describe('getOrderById', () => {
    it('should return order by ID with relations', async () => {
      (mockOrderModelAction.get as jest.Mock).mockResolvedValue({
        id: 'order2',
      });
      const result = await service.getOrderById('order2');
      expect(result!.id).toBe('order2');
    });
  });

  describe('getUserOrders', () => {
    it('should return user orders', async () => {
      (mockOrderModelAction.list as jest.Mock).mockResolvedValue([
        { id: 'order1' },
      ]);
      const result = await service.getUserOrders('user-id');
      expect(result).toHaveLength(1);
    });
  });

  describe('getVendorOrders', () => {
    it('should return vendor orders', async () => {
      (mockOrderModelAction.list as jest.Mock).mockResolvedValue([
        { id: 'order1' },
      ]);
      const result = await service.getVendorOrders('vendor-id', {
        page: 1,
        limit: 10,
      });
      expect(result[0].id).toBe('order1');
    });
  });

  describe('assignVendorToOrder', () => {
    it('should assign vendor to order', async () => {
      (mockOrderModelAction.update as jest.Mock).mockResolvedValue({
        id: 'order-id',
      });
      const result = await service.assignVendorToOrder('order-id', 'vendor-id');
      expect(result!.data).toBeDefined();
    });
  });

  describe('updateOrderStatus', () => {
    it('should skip update if status is the same', async () => {
      (mockOrderModelAction.get as jest.Mock).mockResolvedValue({
        id: 'order1',
        status: OrderStatus.PENDING,
      });
      const result = await service.updateOrderStatus(
        'order1',
        OrderStatus.PENDING,
      );
      expect(result).toBe(false);
    });

    it('should update order status if different', async () => {
      (mockOrderModelAction.get as jest.Mock).mockResolvedValue({
        id: 'order1',
        status: OrderStatus.ASSIGNED,
      });
      (mockOrderModelAction.update as jest.Mock).mockResolvedValue({
        id: 'order1',
        status: OrderStatus.COMPLETED,
      });
      const result = await service.updateOrderStatus(
        'order1',
        OrderStatus.COMPLETED,
      );
      expect(result).toBe(true);
    });
  });
});
