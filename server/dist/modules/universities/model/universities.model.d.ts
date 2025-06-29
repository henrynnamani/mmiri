import { BaseEntity } from '@modules/common/base-entity.model';
import { Location } from '@modules/locations/model/locations.model';
export declare class University extends BaseEntity {
    name: string;
    locations: Location[];
}
