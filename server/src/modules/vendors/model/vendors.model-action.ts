import { AbstractModelAction } from '@modules/common/base-model.action';
import { Vendor } from './vendors.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class VendorModelAction extends AbstractModelAction<Vendor> {
  constructor(@InjectRepository(Vendor) repository: Repository<Vendor>) {
    super(repository, Vendor);
  }
}
