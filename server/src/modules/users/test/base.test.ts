import { Test } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { UsersModelAction } from '../model/users.model-action';
import { mockUsersModelAction } from './mocks/users.test.mock';

export const UserTestingModule = () =>
  Test.createTestingModule({
    providers: [
      UsersService,
      {
        provide: UsersModelAction,
        useValue: mockUsersModelAction,
      },
    ],
  });
