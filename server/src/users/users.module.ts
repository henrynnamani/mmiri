import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersModelAction } from './model/users.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/users.model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersModelAction],
})
export class UsersModule {}
