import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../../dto/auths.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from '@modules/users/users.service';
import { User } from '@modules/users/model/users.model';

@Injectable()
export class UserRegistryStrategy implements RegisterStrategy {
  constructor(private readonly usersService: UsersService) {}

  supports(role: string): boolean {
    return role === 'user';
  }

  register(registerDto: RegisterDto): Promise<User> {
    return this.usersService.registerUser(registerDto);
  }
}
