import { AbstractModelAction } from '@/common/base-model.action';
import { University } from './universities.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class UniversityModelAction extends AbstractModelAction<University> {
  constructor(
    @InjectRepository(University) repository: Repository<University>,
  ) {
    super(repository, University);
  }
}
