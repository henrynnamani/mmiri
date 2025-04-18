import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  createUser(@Body() createUserDto: UserDto) {
    return this.usersService.createUser(createUserDto);
  }
}
