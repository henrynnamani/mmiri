import { Test } from '@nestjs/testing';
import { UniversitiesService } from '@modules/universities/universities.service';
import { UniversityModelAction } from '../model/universities.model-action';

export const mockUniversityModelAction = {
  create: jest.fn(),
  get: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      UniversitiesService,
      {
        provide: UniversityModelAction,
        useValue: mockUniversityModelAction,
      },
    ],
  });
