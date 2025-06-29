import { Repository } from 'typeorm';
import { Location } from './locations.model';
import { AbstractModelAction } from '@modules/common/base-model.action';
export declare class LocationModelAction extends AbstractModelAction<Location> {
    constructor(repository: Repository<Location>);
}
