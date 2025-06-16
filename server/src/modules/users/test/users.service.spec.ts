import { TestingModule } from '@nestjs/testing';
import { UserTestingModule } from './base.test';
import { UsersService } from '../users.service';
import {
  mockUser,
  mockUserRequest,
  mockUsersModelAction,
} from './users.test.mock';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { LoginDto } from '@modules/auths/dto/auths.dto';
import { Role } from '@modules/common/enums';
import { hashPassword, verifyPassword } from '@modules/common/utils/auth';

jest.mock('@modules/common/utils/auth');

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await UserTestingModule().compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerUser', () => {
    it('should throw if user already exists', async () => {
      mockUsersModelAction.get.mockResolvedValueOnce({ id: '1' });

      const dto = {
        email: 'test@example.com',
        password: 'password123',
      };

      await expect(service.registerUser(dto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should create and return the new user', async () => {
      mockUsersModelAction.get.mockResolvedValueOnce(null); // no user exists

      (hashPassword as jest.Mock).mockResolvedValue('hashed-pass');

      mockUsersModelAction.create.mockResolvedValue(undefined); // assume it creates successfully

      const createdUser = {
        id: '123',
        email: 'test@example.com',
        password: 'hashed-pass',
      };

      mockUsersModelAction.get.mockResolvedValueOnce(createdUser);

      const result = await service.registerUser({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(result).toEqual(createdUser);
    });

    it('should throw if user was not created', async () => {
      mockUsersModelAction.get.mockResolvedValueOnce(null);
      (hashPassword as jest.Mock).mockResolvedValue('hashed');
      mockUsersModelAction.create.mockResolvedValue(undefined);
      mockUsersModelAction.get.mockResolvedValueOnce(null);

      await expect(
        service.registerUser({ email: 'new@test.com', password: 'pass' }),
      ).rejects.toThrow(InternalServerErrorException);
    });
  });

  describe('verifyUser', () => {
    it('should throw if user not found', async () => {
      mockUsersModelAction.get.mockResolvedValue(null);
      const dto: LoginDto = {
        email: 'missing@example.com',
        password: '1234',
        role: Role.USER,
      };
      await expect(service.verifyUser(dto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw if password is invalid', async () => {
      const foundUser = { id: '1', email: 'test', password: 'hashed' };
      mockUsersModelAction.get.mockResolvedValue(foundUser);
      (verifyPassword as jest.Mock).mockResolvedValue(false);

      const dto: LoginDto = {
        email: 'test',
        password: 'wrong',
        role: Role.USER,
      };
      await expect(service.verifyUser(dto)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should return user if credentials are valid', async () => {
      const user = { id: '1', email: 'test', password: 'hashed' };
      mockUsersModelAction.get.mockResolvedValue(user);
      (verifyPassword as jest.Mock).mockResolvedValue(true);

      const dto: LoginDto = {
        email: 'test',
        password: 'hashed',
        role: Role.USER,
      };
      const result = await service.verifyUser(dto);
      expect(result).toEqual(user);
    });
  });

  describe('getUserByEmail', () => {
    it('should call get with correct email', async () => {
      const user = { id: 'abc', email: 'test@test.com' };
      mockUsersModelAction.get.mockResolvedValue(user);

      const result = await service.getUserByEmail('test@test.com');
      expect(result).toEqual(user);
      expect(mockUsersModelAction.get).toHaveBeenCalledWith({
        getRecordIdentifierOption: { email: 'test@test.com' },
      });
    });
  });
});
