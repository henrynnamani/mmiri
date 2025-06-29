import { UsersModelAction } from './model/users.model-action';
import { LoginDto, RegisterDto } from '@modules/auths/dto/auths.dto';
import { User } from './model/users.model';
export declare class UsersService {
    private readonly usersModelAction;
    constructor(usersModelAction: UsersModelAction);
    registerUser(createUserDto: Pick<RegisterDto, 'email' | 'password'>): Promise<User>;
    verifyUser(loginDto: LoginDto): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    getUserByEmail(email: string): Promise<User | null>;
    getUserLocation(id: string): void;
}
