import { BaseEntity } from '@modules/common/base-entity.model';
import { Order } from '@modules/order/model/order.model';
export declare class Payment extends BaseEntity {
    order: Order;
    orderId: string;
    amount: number;
    status: boolean;
    reference: string;
}
