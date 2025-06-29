import { AbstractModelAction } from '@modules/common/base-model.action';
import { Vendor } from './vendors.model';
import { Repository } from 'typeorm';
export declare class VendorModelAction extends AbstractModelAction<Vendor> {
    constructor(repository: Repository<Vendor>);
}
