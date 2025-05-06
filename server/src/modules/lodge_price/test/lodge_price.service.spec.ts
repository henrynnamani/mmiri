import { TestingModule } from '@nestjs/testing';
import {
  mockLodgePriceModelAction,
  mockLodgesService,
  mockVendorsService,
  testingModule,
} from './base.test';
import { LodgePriceService } from '../lodge_price.service';
import * as SYS_MSG from '@modules/common/system-message';
import { NotFoundException } from '@nestjs/common';
import {
  mockLodge,
  mockResponse,
  mockSetLodgeChargeDto,
  mockVendor,
} from './mock.test';

describe('LodgePriceService', () => {
  let service: LodgePriceService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<LodgePriceService>(LodgePriceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('setLodgeCharge', () => {
    it('should throw if vendor does not exist', async () => {
      mockVendorsService.getVendorById.mockResolvedValue(null);

      await expect(
        service.setLodgeCharge(mockSetLodgeChargeDto),
      ).rejects.toThrow(new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND));
    });

    it('should throw if lodge does not exist', async () => {
      mockVendorsService.getVendorById.mockResolvedValue({ id: '1' });
      mockLodgesService.getLodgeById.mockResolvedValue(null);

      await expect(
        service.setLodgeCharge(mockSetLodgeChargeDto),
      ).rejects.toThrow(new NotFoundException(SYS_MSG.LODGE_NOT_FOUND));
    });

    it('should return success message and created data', async () => {
      mockVendorsService.getVendorById.mockResolvedValue(mockVendor);
      mockLodgesService.getLodgeById.mockResolvedValue(mockLodge);
      mockLodgePriceModelAction.create.mockResolvedValue(mockResponse);

      const result = await service.setLodgeCharge({
        vendorId: '1',
        lodgeId: '2',
        price: 300,
      });

      expect(result).toEqual({
        data: mockResponse,
        message: SYS_MSG.PRICE_SET_SUCCESSFULLY,
      });
    });
  });

  describe('getLodgePrice', () => {
    it('should throw if no record exists', async () => {
      mockLodgePriceModelAction.get.mockResolvedValue(null);

      await expect(service.getLodgePrice('1', '2')).rejects.toThrow(
        new NotFoundException(SYS_MSG.VENDOR_LODGE_RECORD_NOT_FOUND),
      );
    });

    it('should return lodge price record', async () => {
      const mockRecord = { id: '123', price: 200 };
      mockLodgePriceModelAction.get.mockResolvedValue(mockRecord);

      const result = await service.getLodgePrice('1', '2');
      expect(result).toEqual(mockRecord);
    });
  });

  describe('updateLodgeCharge', () => {
    it('should throw if lodge price record does not exist', async () => {
      mockLodgePriceModelAction.get.mockResolvedValueOnce(null);

      await expect(
        service.updateLodgeCharge('user', '123', 350),
      ).rejects.toThrow(
        new NotFoundException(SYS_MSG.VENDOR_LODGE_RECORD_NOT_FOUND),
      );
    });

    it('should update and return the updated record', async () => {
      const mockExisting = { id: '123', price: 200 };
      const mockUpdated = { id: '123', price: 350 };

      mockLodgePriceModelAction.get
        .mockResolvedValueOnce(mockExisting)
        .mockResolvedValueOnce(mockUpdated);
      mockLodgePriceModelAction.update.mockResolvedValue(mockUpdated);

      const result = await service.updateLodgeCharge('user', '123', 350);

      expect(result).toEqual({
        data: mockUpdated,
        message: SYS_MSG.PRICE_UPDATED_SUCCESSFULLY,
      });

      expect(mockLodgePriceModelAction.update).toHaveBeenCalledWith({
        identifierOptions: { id: '123' },
        updatePayload: { price: 350 },
        transactionOption: { useTransaction: false },
      });
    });
  });
});
