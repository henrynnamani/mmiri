import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Lodge } from './lodges.model';

@Injectable()
export class LodgeModelAction extends AbstractModelAction<Lodge> {
  constructor(@InjectRepository(Lodge) repository: Repository<Lodge>) {
    super(repository, Lodge);
  }
}
