import { BaseEntity } from '@modules/common/base-entity.model';
import { OrderStatus } from '@modules/common/enums';
import { Payment } from '@modules/payment/model/payment.model';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
export declare class Order extends BaseEntity {
    user: User;
    userId: string;
    vendor: Vendor;
    vendorId: string;
    noOfGallons: number;
    roomNumber: string;
    status: OrderStatus;
    payments: Payment[];
}
