import { LoginDto, RegisterDto } from './dto/auths.dto';
import { RegisterStrategyFactory } from './strategy/register/register-strategy.factory';
import { LoginStrategyFactory } from './strategy/login/login-strategy.factory';
import { TokenService } from '@modules/common/token.service';
export declare class AuthsService {
    private readonly tokenService;
    private readonly registerStrategyFactory;
    private readonly loginStrategyFactory;
    constructor(tokenService: TokenService, registerStrategyFactory: RegisterStrategyFactory, loginStrategyFactory: LoginStrategyFactory);
    register(registerDto: RegisterDto): Promise<{
        data: {
            user: import("../vendors/model/vendors.model").Vendor | import("../users/model/users.model").User;
            access_token: string;
        };
    } | undefined>;
    login(loginDto: LoginDto): Promise<{
        data: {
            user: import("../vendors/model/vendors.model").Vendor | import("../users/model/users.model").User;
            access_token: string;
        };
    }>;
}
