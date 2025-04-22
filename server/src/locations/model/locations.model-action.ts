import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@/common/base-model.action';
import { Location } from './locations.model';

@Injectable()
export class LocationModelAction extends AbstractModelAction<Location> {
  constructor(@InjectRepository(Location) repository: Repository<Location>) {
    super(repository, Location);
  }
}
