import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersModelAction } from './model/users.model-action';
import * as SYS_MSG from '@/common/system-message';
import { plainToInstance } from 'class-transformer';
import { RegisterDto } from '@/auths/dto/auths.dto';
import { validateOrReject } from 'class-validator';
import { UserDto } from './dto/users.dto';
import { hashPassword } from '@/common/utils/auth';

@Injectable()
export class UsersService {
  constructor(private readonly usersModelAction: UsersModelAction) {}

  async registerUser(createUserDto: UserDto) {
    const userExist = await this.getUserByEmail(createUserDto.email);

    if (userExist) {
      throw new BadRequestException(SYS_MSG.USER_ALREADY_EXIST);
    }

    const hashedPassword = await hashPassword(createUserDto.password);

    const payload = {
      ...createUserDto,
      password: hashedPassword,
    };

    await this.usersModelAction.create({
      createPayload: payload,
      transactionOptions: {
        useTransaction: false,
      },
    });

    const createdUser = await this.getUserByEmail(createUserDto.email);

    if (!createdUser) {
      throw new InternalServerErrorException(SYS_MSG.USER_NOT_CREATED);
    }

    return createdUser;
  }

  verifyUser() {}

  async createUser(createUserDto: UserDto) {
    const instance = plainToInstance(RegisterDto, createUserDto);

    await validateOrReject(instance);

    const user = await this.usersModelAction.create({
      createPayload: createUserDto,
      transactionOptions: {
        useTransaction: false,
      },
    });

    return { data: user };
  }

  getUserById(id: string) {
    return this.usersModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }

  getUserByEmail(email: string) {
    return this.usersModelAction.get({
      getRecordIdentifierOption: { email },
    });
  }
}
