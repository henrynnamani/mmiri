import { BaseEntity } from '@modules/common/base-entity.model';
import { Role } from '@modules/common/enums';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { Order } from '@modules/order/model/order.model';
export declare class User extends BaseEntity {
    email: string;
    password: string;
    phoneNumber: string;
    role: Role;
    lodge: Lodge;
    lodgeId: string;
    orders: Order[];
}
