import { TestingModule } from '@nestjs/testing';
import {
  mockOrderModelAction,
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
    it('should throw if vendor is not found', async () => {
      mockVendorsService.getVendorById.mockResolvedValue(null);

      await expect(service.placeOrder(mockPlaceOrderDto)).rejects.toThrow(
        new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND),
      );
    });

    it('should throw if user is not found', async () => {
      mockVendorsService.getVendorById.mockResolvedValue(mockVendor);
      mockUsersService.getUserById.mockResolvedValue(null);

      await expect(service.placeOrder(mockPlaceOrderDto)).rejects.toThrow(
        new NotFoundException(SYS_MSG.USER_NOT_FOUND),
      );
    });

    it('should place order successfully', async () => {
      mockVendorsService.getVendorById.mockResolvedValue(mockVendor);
      mockUsersService.getUserById.mockResolvedValue(mockUser);
      mockOrderModelAction.create.mockResolvedValue(mockOrder);

      const result = await service.placeOrder(mockPlaceOrderDto);

      expect(result.message).toBe(SYS_MSG.ORDER_PLACED_SUCCESSFULLY);
      expect(result.data).toEqual(mockOrder);
    });
  });

  describe('getOrderByReference', () => {
    it('should return order if found', async () => {
      mockOrderModelAction.get.mockResolvedValue(mockOrder);

      const result = await service.getOrderByReference('ref-123');
      expect(result).toEqual(mockOrder);
    });
  });

  describe('updateOrderStatus', () => {
    it('should throw if order does not exist', async () => {
      mockOrderModelAction.get.mockResolvedValueOnce(null);

      await expect(service.updateOrderStatus('ref-123', true)).rejects.toThrow(
        new NotFoundException(SYS_MSG.ORDER_NOT_FOUND),
      );
    });

    it('should throw if status was not updated', async () => {
      mockOrderModelAction.get.mockResolvedValueOnce(mockOrder);

      mockOrderModelAction.update.mockResolvedValue({ ...mockOrder });

      mockOrderModelAction.get.mockResolvedValueOnce({
        ...mockOrder,
        paymentStatus: false,
      });

      await expect(service.updateOrderStatus('ref-123', true)).rejects.toThrow(
        new BadRequestException(SYS_MSG.ORDER_STATUS_NOT_UPDATED),
      );
    });

    it('should update order status successfully if updated', async () => {
      mockOrderModelAction.get.mockResolvedValueOnce(mockOrder);

      mockOrderModelAction.update.mockResolvedValue({
        ...mockOrder,
        paymentStatus: true,
      });

      mockOrderModelAction.get.mockResolvedValueOnce({
        ...mockOrder,
        paymentStatus: true,
      });

      const result = await service.updateOrderStatus('ref-123', true);

      expect(result.message).toBe(SYS_MSG.ORDER_STATUS_UPDATED_SUCCESSFULLY);
      expect(result.data.paymentStatus).toBe(true);
    });
  });

  describe('getUserOrders', () => {
    it('should list user orders', async () => {
      const mockList = { data: [], meta: { total: 0 } };
      mockOrderModelAction.list.mockResolvedValue(mockList);

      const result = await service.getUserOrders('user-id', {
        page: 1,
        limit: 10,
      });

      expect(result).toEqual(mockList);
    });
  });

  describe('getVendorOrders', () => {
    it('should list vendor orders', async () => {
      const mockList = { data: [], meta: { total: 0 } };
      mockOrderModelAction.list.mockResolvedValue(mockList);

      const result = await service.getVendorOrders('vendor-id', {
        page: 1,
        limit: 10,
      });

      expect(result).toEqual(mockList);
    });
  });
});
