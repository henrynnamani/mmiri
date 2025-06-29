import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Order } from './order.model';
export declare class OrderModelAction extends AbstractModelAction<Order> {
    constructor(repository: Repository<Order>);
}
