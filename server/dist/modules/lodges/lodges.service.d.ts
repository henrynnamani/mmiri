import { LodgeDto } from './dto/lodges.dto';
import { LocationsService } from '@modules/locations/locations.service';
import { LodgeModelAction } from './model/lodges.mode-action';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
export declare class LodgesService {
    private locationService;
    private lodgeModelAction;
    private lodgePriceModelAction;
    constructor(locationService: LocationsService, lodgeModelAction: LodgeModelAction, lodgePriceModelAction: LodgePriceModelAction);
    createLodge(lodgeDto: LodgeDto): Promise<{
        data: import("./model/lodges.model").Lodge[];
        message: string;
    }>;
    getLodgeById(id: string): Promise<import("./model/lodges.model").Lodge | null>;
    getLodgeLocationPrice(id: string): Promise<number | undefined>;
    getLodgeVendors(id: string, page: number, limit: number): Promise<{
        data: {
            payload: import("../lodge_price/model/lodge_price.model").LodgePrice[];
            paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
        };
    }>;
}
