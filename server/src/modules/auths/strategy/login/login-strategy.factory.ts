import { Injectable } from '@nestjs/common';
import { UserLoginStrategy } from './user-login.strategy';
import { LoginStrategy } from './login-interface.strategy';

@Injectable()
export class LoginStrategyFactory {
  strategies: LoginStrategy[] = [];
  constructor(private userLoginStrategy: UserLoginStrategy) {
    this.strategies.push(this.userLoginStrategy);
  }

  getStrategy(role: string): LoginStrategy {
    const strategy = this.strategies.find((s) => s.supports(role));

    if (!strategy) {
      throw new Error(`No strategy found for role: ${role}`);
    }

    return strategy;
  }
}
