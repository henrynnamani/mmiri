import { Injectable } from '@nestjs/common';
import { LoginStrategy } from './login-interface.strategy';
import { LoginDto } from '@/auths/dto/auths.dto';
import { User } from '@/users/model/users.model';
import { Vendor } from '@/vendors/model/vendors.model';
import { UsersService } from '@/users/users.service';

@Injectable()
export class UserLoginStrategy implements LoginStrategy {
  constructor(private readonly usersService: UsersService) {}

  supports(role: string): boolean {
    return role === 'user';
  }

  login(loginDto: LoginDto): Promise<User | Vendor> {
    return this.usersService.verifyUser(loginDto);
  }
}
