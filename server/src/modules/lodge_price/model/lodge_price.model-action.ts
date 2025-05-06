import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { LodgePrice } from './lodge_price.model';

@Injectable()
export class LodgePriceModelAction extends AbstractModelAction<LodgePrice> {
  constructor(
    @InjectRepository(LodgePrice) repository: Repository<LodgePrice>,
  ) {
    super(repository, LodgePrice);
  }
}
