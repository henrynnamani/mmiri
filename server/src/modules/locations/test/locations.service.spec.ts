import { TestingModule } from '@nestjs/testing';
import { LocationsService } from '../locations.service';
import {
  mockLocationModelAction,
  mockUniversitiesService,
  testingModule,
} from './base';
import { NotFoundException } from '@nestjs/common';
import { mockLocationData } from './mock.test';
import { dataSource } from '@database/datasource';

jest.mock('@database/datasource', () => ({
  dataSource: {
    transaction: jest.fn(),
  },
}));

describe('LocationsService', () => {
  let service: LocationsService;

  beforeAll(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<LocationsService>(LocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createLocation', () => {
    it('should throw if university is not found', async () => {
      mockUniversitiesService.findUniversityById.mockResolvedValue(null);

      await expect(service.createLocation(mockLocationData)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should create locations if university exists', async () => {
      const mockUniversity = { id: 'univ-id' };

      (dataSource.transaction as jest.Mock).mockImplementation((cb) => {
        return cb('mockTransactionManager');
      });

      jest
        .spyOn(mockUniversitiesService, 'findUniversityById')
        .mockResolvedValue(mockUniversity);
      jest.spyOn(mockLocationModelAction, 'create').mockImplementation();

      const result = await service.createLocation(mockLocationData);

      const spy = jest.spyOn(dataSource, 'transaction');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Locations created successfully');
    });
  });
});
