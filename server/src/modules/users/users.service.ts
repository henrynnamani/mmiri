import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UsersModelAction } from './model/users.model-action';
import * as SYS_MSG from '@modules/common/system-message';
import { hashPassword, verifyPassword } from '@modules/common/utils/auth';
import { LoginDto, RegisterDto } from '@modules/auths/dto/auths.dto';
import { User } from './model/users.model';

@Injectable()
export class UsersService {
  constructor(private readonly usersModelAction: UsersModelAction) {}

  async registerUser(createUserDto: Pick<RegisterDto, 'email' | 'password'>) {
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

  async verifyUser(loginDto: LoginDto): Promise<User> {
    const userExist = await this.getUserByEmail(loginDto.email);

    if (!userExist) {
      throw new BadRequestException(SYS_MSG.USER_NOT_FOUND);
    }

    const isPasswordValid = await verifyPassword(
      loginDto.password,
      userExist.password,
    );

    if (!isPasswordValid) {
      throw new BadRequestException(SYS_MSG.INVALID_CREDENTIALS);
    }

    return userExist;
  }

  getUserById(id: string) {
    return this.usersModelAction.get({
      getRecordIdentifierOption: { id },
      relations: ['lodge'],
    });
  }

  getUserByEmail(email: string) {
    return this.usersModelAction.get({
      getRecordIdentifierOption: { email },
    });
  }

  getUserLocation(id: string) {}
}
