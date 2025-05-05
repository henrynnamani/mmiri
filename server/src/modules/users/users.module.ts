import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModelAction } from './model/users.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/users.model';
import { UsersController } from './users.controller';
import { OrderModule } from '@modules/order/order.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), OrderModule],
  controllers: [UsersController],
  providers: [UsersService, UsersModelAction],
  exports: [UsersService],
})
export class UsersModule {}
