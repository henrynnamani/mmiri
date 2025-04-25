import { Injectable } from '@nestjs/common';
import { VendorLocationModelAction } from './model/vendor_locations.model-action';
import { Vendor } from '@/vendors/model/vendors.model';
import { Location } from '@/locations/model/locations.model';

@Injectable()
export class VendorLocationsService {
  constructor(private vendorLocationModelAction: VendorLocationModelAction) {}

  async addServingLocation(vendor: Vendor, location: Location) {
    const response = await this.vendorLocationModelAction.create({
      createPayload: {
        vendor: vendor,
        location: location,
      },
      transactionOptions: {
        useTransaction: false,
      },
    });

    return response;
  }
}
