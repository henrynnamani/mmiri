import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { RegisterStrategyFactory } from './strategy/register/register-strategy.factory';
import { UserRegistryStrategy } from './strategy/register/user-registry.strategy';
import { VendorRegistryStrategy } from './strategy/register/vendor-registry.strategy';
import { LoginStrategyFactory } from './strategy/login/login-strategy.factory';
import { UserLoginStrategy } from './strategy/login/user-login.strategy';
import { VendorLoginStrategy } from './strategy/login/vendor-login.strategy';
import { TokenService } from '@modules/common/token.service';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [UsersModule, VendorsModule],
  controllers: [AuthsController],
  providers: [
    AuthsService,
    RegisterStrategyFactory,
    UserRegistryStrategy,
    VendorRegistryStrategy,
    LoginStrategyFactory,
    UserLoginStrategy,
    VendorLoginStrategy,
    TokenService,
  ],
})
export class AuthsModule {}
