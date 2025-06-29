import { VendorLocationModelAction } from './model/vendor_locations.model-action';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { Location } from '@modules/locations/model/locations.model';
export declare class VendorLocationsService {
    private vendorLocationModelAction;
    constructor(vendorLocationModelAction: VendorLocationModelAction);
    addServingLocation(vendor: Vendor, location: Location): Promise<import("./model/vendor_locations.model").VendorLocation>;
    vendorServeLocation(vendor: Vendor, location: Location): Promise<boolean>;
    checkVendorServeLocation(vendor: Vendor, location: Location): Promise<boolean>;
}
