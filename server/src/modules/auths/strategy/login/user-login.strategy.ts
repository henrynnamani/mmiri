import { Injectable } from '@nestjs/common';
import { LoginStrategy } from './login-interface.strategy';
import { LoginDto } from '@modules/auths/dto/auths.dto';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { UsersService } from '@modules/users/users.service';

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
