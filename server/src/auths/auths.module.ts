import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { UsersModule } from '@/users/users.module';
import { VendorsModule } from '@/vendors/vendors.module';
import { RegisterStrategyFactory } from './strategy/register-strategy.factory';
import { UserRegistryStrategy } from './strategy/user-registry.strategy';
import { VendorRegistryStrategy } from './strategy/vendor-registry.strategy';

@Module({
  imports: [UsersModule, VendorsModule],
  controllers: [AuthsController],
  providers: [
    AuthsService,
    RegisterStrategyFactory,
    UserRegistryStrategy,
    VendorRegistryStrategy,
  ],
})
export class AuthsModule {}
