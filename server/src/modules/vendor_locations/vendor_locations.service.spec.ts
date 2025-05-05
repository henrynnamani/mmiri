import { Test, TestingModule } from '@nestjs/testing';
import { VendorLocationsService } from './vendor_locations.service';

describe('VendorLocationsService', () => {
  let service: VendorLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorLocationsService],
    }).compile();

    service = module.get<VendorLocationsService>(VendorLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
