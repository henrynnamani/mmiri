import { Injectable } from '@nestjs/common';
import { RegisterStrategy } from './register-interface.strategy';
import { UserRegistryStrategy } from './user-registry.strategy';
import { VendorRegistryStrategy } from './vendor-registry.strategy';

@Injectable()
export class RegisterStrategyFactory {
  strategies: RegisterStrategy[] = [];
  constructor(
    private userRegistryStrategy: UserRegistryStrategy,
    private vendorRegistryStrategy: VendorRegistryStrategy,
  ) {
    this.strategies.push(
      this.userRegistryStrategy,
      this.vendorRegistryStrategy,
    );
  }

  getStrategy(role: string): RegisterStrategy {
    const strategy = this.strategies.find((s) => s.supports(role));
    if (!strategy) {
      throw new Error(`No strategy found for role: ${role}`);
    }
    return strategy;
  }
}
