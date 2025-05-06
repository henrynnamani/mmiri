import { TestingModule } from '@nestjs/testing';
import { VendorLocationsService } from '../vendor_locations.service';
import { mockVendorLocationModelAction, testingModule } from './base.test';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Location } from '@modules/locations/model/locations.model';

describe('VendorLocationsService', () => {
  let service: VendorLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await testingModule().compile();

    service = module.get<VendorLocationsService>(VendorLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addServingLocation', () => {
    it('should create a vendor-location relation and return the result', async () => {
      const vendor = { id: 'v123' } as Vendor;
      const location = { id: 'l456' } as Location;
      const mockResponse = { id: 'rel789', vendor, location };

      mockVendorLocationModelAction.create.mockResolvedValue(mockResponse);

      const result = await service.addServingLocation(vendor, location);

      expect(result).toEqual(mockResponse);
      expect(mockVendorLocationModelAction.create).toHaveBeenCalledWith({
        createPayload: { vendor, location },
        transactionOptions: { useTransaction: false },
      });
    });
  });
});
