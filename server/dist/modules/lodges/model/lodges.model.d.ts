import { BaseEntity } from '@modules/common/base-entity.model';
import { Location } from '@modules/locations/model/locations.model';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
export declare class Lodge extends BaseEntity {
    name: string;
    location: Location;
    vendors: LodgePrice[];
}
