import { TestingModule } from '@nestjs/testing';
import { UserTestingModule } from './base.test';
import { UsersService } from '../users.service';
import {
  mockUser,
  mockUserRequest,
  mockUsersModelAction,
} from './mocks/users.test.mock';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await UserTestingModule().compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create User', () => {
    it('should throw an error if user already exist', async () => {
      jest.spyOn(service, 'getUserByEmail').mockResolvedValue(null);

      const response = await service.createUser(mockUserRequest);

      console.log(response);

      expect(response?.data).toBeUndefined();
    });

    it('should create a new user', async () => {
      jest.spyOn(mockUsersModelAction, 'create').mockResolvedValue(mockUser);

      //
      expect(mockUsersModelAction.create).toHaveBeenCalledWith({
        createPayload: mockUserRequest,
        transactionOptions: {
          useTransaction: false,
        },
      });

      const response = await mockUsersModelAction.create(mockUserRequest);

      expect(response).toMatchObject(mockUser);
    });
  });
});
