import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Location } from './locations.model';
import { AbstractModelAction } from '@modules/common/base-model.action';

@Injectable()
export class LocationModelAction extends AbstractModelAction<Location> {
  constructor(@InjectRepository(Location) repository: Repository<Location>) {
    super(repository, Location);
  }
}
