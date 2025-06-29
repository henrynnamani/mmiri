import { AuthsService } from './auths.service';
import { LoginDto, RegisterDto } from './dto/auths.dto';
export declare class AuthsController {
    private readonly authsService;
    constructor(authsService: AuthsService);
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
