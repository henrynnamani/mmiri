import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';
import { UsersModelAction } from './model/users.model-action';

@Injectable()
export class UsersService {
  constructor(private readonly usersModelAction: UsersModelAction) {}

  async createUser(createUserDto: UserDto) {
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
}
