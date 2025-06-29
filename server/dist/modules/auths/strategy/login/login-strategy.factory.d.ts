import { UserLoginStrategy } from './user-login.strategy';
import { LoginStrategy } from './login-interface.strategy';
export declare class LoginStrategyFactory {
    private userLoginStrategy;
    strategies: LoginStrategy[];
    constructor(userLoginStrategy: UserLoginStrategy);
    getStrategy(role: string): LoginStrategy;
}
