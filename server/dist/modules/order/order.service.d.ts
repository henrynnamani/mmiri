import { OrderDto } from './dto/order.dto';
import { VendorsService } from '@modules/vendors/vendors.service';
import { OrderModelAction } from './model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { PaginationMeta } from '@modules/common/types/list-record.type';
import { OrderStatus } from '@modules/common/enums';
import { TelegramService } from '@modules/telegram/telegram.service';
import { PaymentService } from '@modules/payment/payment.service';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
export declare class OrderService {
    private orderModelAction;
    private usersService;
    private vendorsService;
    private telegramService;
    private paymentService;
    private lodgePriceModelAction;
    constructor(orderModelAction: OrderModelAction, usersService: UsersService, vendorsService: VendorsService, telegramService: TelegramService, paymentService: PaymentService, lodgePriceModelAction: LodgePriceModelAction);
    placeOrder(loggedInUserId: string, orderDto: OrderDto): Promise<{
        data: any;
        message: string;
    }>;
    getOrderByReference(reference: string): Promise<import("./model/order.model").Order | null>;
    getOrderById(orderId: string): Promise<import("./model/order.model").Order | null>;
    getUserOrders(id: string): Promise<{
        payload: import("./model/order.model").Order[];
        paginationMeta: Partial<PaginationMeta>;
    }>;
    getVendorOrders(id: string, pagination: Pick<PaginationMeta, 'page' | 'limit'>): Promise<{
        payload: import("./model/order.model").Order[];
        paginationMeta: Partial<PaginationMeta>;
    }>;
    assignVendorToOrder(orderId: string, vendorId: string): Promise<{
        data: import("typeorm").UpdateResult;
    }>;
    updateOrderStatus(orderId: string, status: OrderStatus): Promise<boolean>;
}
