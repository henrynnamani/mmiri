import { TestingModule } from '@nestjs/testing';
import {
  mockLocationsService,
  mockLodgeModelAction,
  mockLodgePriceModelAction,
  testingModule,
} from './base.test';
import { LodgesService } from '../lodges.service';
import { dataSource } from '@database/datasource';
import { NotFoundException } from '@nestjs/common';
import * as SYS_MSG from '@modules/common/system-message';

jest.mock('@database/datasource', () => ({
  dataSource: {
    transaction: jest.fn(),
  },
}));

describe('LodgesService', () => {
  let service: LodgesService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<LodgesService>(LodgesService);
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createLodge', () => {
    it('should throw if location not found', async () => {
      mockLocationsService.findLocationById.mockResolvedValue(null);
      await expect(
        service.createLodge({ locationId: 'loc123', lodges: ['A'] }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should create lodges and return result', async () => {
      const mockLocation = { id: 'loc123' };
      const mockCreatedLodge = { id: 'lodge123', name: 'A' };

      mockLocationsService.findLocationById.mockResolvedValue(mockLocation);
      (dataSource.transaction as jest.Mock).mockImplementation((cb) =>
        cb('mockManager'),
      );

      mockLodgeModelAction.create.mockResolvedValue(mockCreatedLodge);

      const res = await service.createLodge({
        locationId: 'loc123',
        lodges: ['A'],
      });

      expect(res.data).toEqual([mockCreatedLodge]);
      expect(res.message).toBe(SYS_MSG.LODGE_CREATED_SUCCESSFULLY);
    });
  });

  describe('getLodgeById', () => {
    it('should return lodge', async () => {
      const lodge = { id: 'lodge123' };
      mockLodgeModelAction.get.mockResolvedValue(lodge);
      const result = await service.getLodgeById('lodge123');
      expect(result).toEqual(lodge);
    });
  });

  describe('getLodgePrices', () => {
    it('should return lodge prices with relations', async () => {
      const prices = [{ id: 'price1' }];
      mockLodgePriceModelAction.get.mockResolvedValue(prices);
      const result = await service.getLodgePrices('lodge123');
      expect(result).toEqual(prices);
    });
  });

  describe('getLodgeVendors', () => {
    it('should throw if lodge not found', async () => {
      mockLodgeModelAction.get.mockResolvedValue(null);
      await expect(
        service.getLodgeVendors('invalid-id', 1, 10),
      ).rejects.toThrow(NotFoundException);
    });

    it('should return lodge vendors with pagination', async () => {
      const vendors = [{ vendor: { id: 'vendor123' } }];
      mockLodgeModelAction.get.mockResolvedValue({ id: 'lodge123' });
      mockLodgePriceModelAction.list.mockResolvedValue(vendors);

      const res = await service.getLodgeVendors('lodge123', 1, 10);
      expect(res.data).toEqual(vendors);
    });
  });
});
