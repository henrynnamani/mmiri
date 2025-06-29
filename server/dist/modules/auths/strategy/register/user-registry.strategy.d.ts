import { RegisterStrategy } from './register-interface.strategy';
import { RegisterDto } from '../../dto/auths.dto';
import { UsersService } from '@modules/users/users.service';
import { User } from '@modules/users/model/users.model';
export declare class UserRegistryStrategy implements RegisterStrategy {
    private readonly usersService;
    constructor(usersService: UsersService);
    supports(role: string): boolean;
    register(registerDto: RegisterDto): Promise<User>;
}
