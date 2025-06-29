import { BaseEntity } from '@modules/common/base-entity.model';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { University } from '@modules/universities/model/universities.model';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';
export declare class Location extends BaseEntity {
    university: University;
    name: string;
    vendors: VendorLocation[];
    lodges: Lodge[];
    price: number;
}
