import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.model';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AbstractModelAction } from '@/common/base-model.action';

@Injectable()
export class UsersModelAction extends AbstractModelAction<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository, User);
  }
}
