import { LoginStrategy } from './login-interface.strategy';
import { LoginDto } from '@modules/auths/dto/auths.dto';
import { User } from '@modules/users/model/users.model';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { UsersService } from '@modules/users/users.service';
export declare class UserLoginStrategy implements LoginStrategy {
    private readonly usersService;
    constructor(usersService: UsersService);
    supports(role: string): boolean;
    login(loginDto: LoginDto): Promise<User | Vendor>;
}
