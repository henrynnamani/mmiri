import { LodgePriceDto } from './dto/lodge_price.dto';
import { VendorsService } from '@modules/vendors/vendors.service';
import { LodgesService } from '@modules/lodges/lodges.service';
import { LodgePriceModelAction } from './model/lodge_price.model-action';
export declare class LodgePriceService {
    private lodgesService;
    private readonly vendorsService;
    private lodgePriceModelAction;
    constructor(lodgesService: LodgesService, vendorsService: VendorsService, lodgePriceModelAction: LodgePriceModelAction);
    setVendorLodge(lodgePriceDto: LodgePriceDto): Promise<{
        data: import("./model/lodge_price.model").LodgePrice;
        message: string;
    }>;
}
