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

  async findAvailableVendorsByLodge(lodgeId: string) {
    const lodgePrices = await this.repository
      .createQueryBuilder('lodge_price')
      .innerJoinAndSelect('lodge_price.vendor', 'vendor')
      .innerJoinAndSelect('lodge_price.lodge', 'lodge')
      .leftJoin('orders', 'order', 'order.vendor_id = vendor.id')
      .where('lodge.id = :lodgeId', { lodgeId })
      .andWhere('vendor.isActive = true')
      .groupBy('lodge_price.id')
      .addGroupBy('vendor.id')
      .addGroupBy('lodge.id')
      .having('COUNT(order.id) < 10')
      .getMany();

    const response = lodgePrices.map((lp) => lp.vendor);

    return response;
  }
}
