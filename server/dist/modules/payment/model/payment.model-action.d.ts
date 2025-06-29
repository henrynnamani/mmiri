import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Payment } from './payment.model';
export declare class PaymentModelAction extends AbstractModelAction<Payment> {
    constructor(repository: Repository<Payment>);
}
