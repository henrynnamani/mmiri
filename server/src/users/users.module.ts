import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersModelAction } from './model/users.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/users.model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [],
  providers: [UsersService, UsersModelAction],
  exports: [UsersService],
})
export class UsersModule {}
