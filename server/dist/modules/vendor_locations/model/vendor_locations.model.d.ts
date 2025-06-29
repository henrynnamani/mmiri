import { BaseEntity } from '@modules/common/base-entity.model';
import { Location } from '@modules/locations/model/locations.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
export declare class VendorLocation extends BaseEntity {
    vendor: Vendor;
    vendorId: string;
    location: Location;
    locationId: string;
}
