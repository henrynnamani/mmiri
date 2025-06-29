import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { LodgePrice } from './lodge_price.model';
export declare class LodgePriceModelAction extends AbstractModelAction<LodgePrice> {
    constructor(repository: Repository<LodgePrice>);
    findAvailableVendorsByLodge(lodgeId: string): Promise<import("../../vendors/model/vendors.model").Vendor[]>;
}
