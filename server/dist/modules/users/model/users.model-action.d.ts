import { User } from './users.model';
import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
export declare class UsersModelAction extends AbstractModelAction<User> {
    constructor(repository: Repository<User>);
}
