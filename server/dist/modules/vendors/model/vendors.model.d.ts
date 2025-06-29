import { BaseEntity } from '@modules/common/base-entity.model';
import { Role } from '@modules/common/enums';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
import { Order } from '@modules/order/model/order.model';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';
export declare class Vendor extends BaseEntity {
    email: string;
    chatId: number;
    phoneNumber: string;
    available: boolean;
    businessName: string;
    bankCode: string;
    accountNumber: string;
    subaccount: string;
    isActive: boolean;
    role: Role;
    locations: VendorLocation[];
    lodges: LodgePrice[];
    orders: Order[];
}
