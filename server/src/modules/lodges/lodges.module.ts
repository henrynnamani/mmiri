import { Module } from '@nestjs/common';
import { LodgesService } from './lodges.service';
import { LodgesController } from './lodges.controller';
import { Lodge } from './model/lodges.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsModule } from '@modules/locations/locations.module';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
import { LodgeModelAction } from './model/lodges.mode-action';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';

@Module({
  imports: [TypeOrmModule.forFeature([Lodge, LodgePrice]), LocationsModule],
  controllers: [LodgesController],
  providers: [LodgesService, LodgeModelAction, LodgePriceModelAction],
  exports: [LodgesService],
})
export class LodgesModule {}
