import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { VendorLocation } from './vendor_locations.model';
export declare class VendorLocationModelAction extends AbstractModelAction<VendorLocation> {
    constructor(repository: Repository<VendorLocation>);
}
