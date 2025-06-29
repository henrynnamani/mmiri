import { OrderService } from '@modules/order/order.service';
export declare class UsersController {
    private readonly orderService;
    constructor(orderService: OrderService);
    getUserOrders(request: any): Promise<{
        payload: import("../order/model/order.model").Order[];
        paginationMeta: Partial<import("../common/types/list-record.type").PaginationMeta>;
    }>;
}
