import { LodgesService } from './lodges.service';
import { LodgeDto } from './dto/lodges.dto';
export declare class LodgesController {
    private readonly lodgesService;
    constructor(lodgesService: LodgesService);
    addLodge(lodgeDto: LodgeDto): Promise<{
        data: import("./model/lodges.model").Lodge[];
        message: string;
    }>;
    getLodgeVendors(lodgeId: string, page: number, limit: number): Promise<{
        data: {
            payload: import("../lodge_price/model/lodge_price.model").LodgePrice[];
            paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
        };
    }>;
}
