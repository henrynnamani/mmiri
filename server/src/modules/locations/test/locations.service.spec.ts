import { TestingModule } from '@nestjs/testing';
import { LocationsService } from '../locations.service';
import {
  mockLocationModelAction,
  mockUniversitiesService,
  testingModule,
} from './base';
import { NotFoundException } from '@nestjs/common';
import { mockCreatedLocations, mockLocationData } from './mock.test';
import { dataSource } from '@database/datasource';
import { EntityManager } from 'typeorm';

describe('LocationsService', () => {
  let service: LocationsService;

  beforeAll(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<LocationsService>(LocationsService);
  });

  beforeEach(() => {
    jest.clearAllMocks();

    jest
      .spyOn(dataSource, 'transaction')
      .mockImplementation(
        async (runInTransaction: (manager: EntityManager) => Promise<any>) => {
          // Simulate a transaction with a fake manager
          return runInTransaction({} as EntityManager);
        },
      );
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
      jest
        .spyOn(mockUniversitiesService, 'findUniversityById')
        .mockResolvedValue(mockUniversity);
      jest.spyOn(mockLocationModelAction, 'create').mockImplementation();

      jest
        .spyOn(service, 'createLocation')
        .mockResolvedValue(mockCreatedLocations);

      jest
        .spyOn(dataSource, 'transaction')
        .mockImplementation(
          async (cb: (manager: EntityManager) => Promise<any>) => {
            return cb({} as EntityManager);
          },
        );

      const result = await service.createLocation(mockLocationData);

      expect(result.data).toHaveLength(2);
      expect(result.message).toBe('Locations created successfully');
      expect(mockLocationModelAction.create).toHaveBeenCalled();
    });
  });
});
