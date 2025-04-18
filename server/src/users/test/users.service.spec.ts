import { TestingModule } from '@nestjs/testing';
import { UserTestingModule } from './base.test';
import { UsersService } from '../users.service';
import { mockUserRequest } from './mocks/users.test.mock';

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

      expect(response).rejects.toMatchObject({
        data: null,
        message: 'User already exists',
        success: false,
      });
    });

    it('should create a new user', async () => {
      const response = await service.createUser(mockUserRequest);

      expect(response).resolves.toMatchObject({
        data: expect.any(Object),
        message: 'User created successfully',
        success: true,
      });
    });
  });
});
