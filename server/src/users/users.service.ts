import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/users.dto';

@Injectable()
export class UsersService {
  constructor() {}

  createUser(createUserDto: UserDto) {
    return { data: createUserDto };
  }
}
