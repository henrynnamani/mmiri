import { RegisterStrategy } from './register-interface.strategy';
import { UserRegistryStrategy } from './user-registry.strategy';
import { VendorRegistryStrategy } from './vendor-registry.strategy';
export declare class RegisterStrategyFactory {
    private userRegistryStrategy;
    private vendorRegistryStrategy;
    strategies: RegisterStrategy[];
    constructor(userRegistryStrategy: UserRegistryStrategy, vendorRegistryStrategy: VendorRegistryStrategy);
    getStrategy(role: string): RegisterStrategy;
}
