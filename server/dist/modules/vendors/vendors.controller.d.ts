import { VendorsService } from './vendors.service';
import { OrderService } from '@modules/order/order.service';
export declare class VendorsController {
    private readonly vendorsService;
    private readonly orderService;
    constructor(vendorsService: VendorsService, orderService: OrderService);
    getAllVendors(): Promise<{
        payload: import("./model/vendors.model").Vendor[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
    getVendorOrders(id: string, page: number, limit: number): Promise<{
        payload: import("../order/model/order.model").Order[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
}
