import { BaseEntity } from '@modules/common/base-entity.model';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
export declare class LodgePrice extends BaseEntity {
    vendor: Vendor;
    vendorId: string;
    lodge: Lodge;
    lodgeId: string;
}
