import { Module } from '@nestjs/common';
import { LodgesService } from './lodges.service';
import { LodgesController } from './lodges.controller';
import { Lodge } from './model/lodges.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lodge])],
  controllers: [LodgesController],
  providers: [LodgesService],
})
export class LodgesModule {}
