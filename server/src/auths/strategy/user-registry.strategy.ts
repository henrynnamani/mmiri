import { UsersService } from '@/users/users.service';
import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../dto/auths.dto';
import { User } from '@/users/model/users.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRegistryStrategy implements RegisterStrategy {
  constructor(private readonly usersService: UsersService) {}

  supports(role: string): boolean {
    return role === 'user';
  }

  async register(registerDto: RegisterDto): Promise<User> {
    return this.usersService.registerUser(registerDto);
  }
}
