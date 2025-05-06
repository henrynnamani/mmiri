import { Test } from '@nestjs/testing';
import { LocationsService } from '../locations.service';
import { LocationModelAction } from '../model/locations.model-action';
import { UniversitiesService } from '@modules/universities/universities.service';

export const mockLocationModelAction = {
  create: jest.fn(),
  get: jest.fn(),
};

export const mockUniversitiesService = {
  findUniversityById: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      LocationsService,
      {
        provide: LocationModelAction,
        useValue: mockLocationModelAction,
      },
      {
        provide: UniversitiesService,
        useValue: mockUniversitiesService,
      },
    ],
  });
