import { BadRequestException, Injectable } from '@nestjs/common';
import { VendorLocationModelAction } from './model/vendor_locations.model-action';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Location } from '@modules/locations/model/locations.model';
import * as SYS_MSG from '@modules/common/system-message';

@Injectable()
export class VendorLocationsService {
  constructor(private vendorLocationModelAction: VendorLocationModelAction) {}

  async addServingLocation(vendor: Vendor, location: Location) {
    const locationServed = await this.checkVendorServeLocation(
      vendor,
      location,
    );

    if (locationServed) {
      throw new BadRequestException(SYS_MSG.LOCATION_SERVED);
    }

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

  async vendorServeLocation(vendor: Vendor, location: Location) {
    const response = await this.vendorLocationModelAction.get({
      getRecordIdentifierOption: {
        vendor,
        location,
      },
    });

    console.log(response);
    return response ? true : false;
  }

  async checkVendorServeLocation(vendor: Vendor, location: Location) {
    const response = await this.vendorLocationModelAction.get({
      getRecordIdentifierOption: {
        vendorId: vendor.id,
        locationId: location.id,
      },
    });

    return response ? true : false;
  }
}
