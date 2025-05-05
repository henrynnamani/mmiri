import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Order } from './order.model';

@Injectable()
export class OrderModelAction extends AbstractModelAction<Order> {
  constructor(@InjectRepository(Order) repository: Repository<Order>) {
    super(repository, Order);
  }
}
