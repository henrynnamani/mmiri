import { Test } from '@nestjs/testing';
import { LodgesService } from '../lodges.service';
import { LocationsService } from '@modules/locations/locations.service';
import { LodgeModelAction } from '../model/lodges.mode-action';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';

export const mockLocationsService = {
  findLocationById: jest.fn(),
};

export const mockLodgeModelAction = {
  get: jest.fn(),
  create: jest.fn(),
};

export const mockLodgePriceModelAction = {
  get: jest.fn(),
  list: jest.fn(),
};

export const testingModule = () =>
  Test.createTestingModule({
    providers: [
      LodgesService,
      {
        provide: LocationsService,
        useValue: mockLocationsService,
      },
      {
        provide: LodgeModelAction,
        useValue: mockLodgeModelAction,
      },
      {
        provide: LodgePriceModelAction,
        useValue: mockLodgePriceModelAction,
      },
    ],
  });
