import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';
import { AbstractModelAction } from 'src/common/base-model.action';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersModelAction extends AbstractModelAction<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository, User);
  }
}
