import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Payment } from './payment.model';

@Injectable()
export class PaymentModelAction extends AbstractModelAction<Payment> {
  constructor(@InjectRepository(Payment) repository: Repository<Payment>) {
    super(repository, Payment);
  }
}
