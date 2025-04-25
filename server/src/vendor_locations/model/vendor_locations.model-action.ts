import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@/common/base-model.action';
import { VendorLocation } from './vendor_locations.model';

@Injectable()
export class VendorLocationModelAction extends AbstractModelAction<VendorLocation> {
  constructor(
    @InjectRepository(VendorLocation) repository: Repository<VendorLocation>,
  ) {
    super(repository, VendorLocation);
  }
}
