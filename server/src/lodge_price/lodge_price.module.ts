import { Module } from '@nestjs/common';
import { LodgePriceService } from './lodge_price.service';
import { LodgePriceController } from './lodge_price.controller';
import { VendorsModule } from '@/vendors/vendors.module';
import { LodgesModule } from '@/lodges/lodges.module';
import { LodgePriceModelAction } from './model/lodge_price.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LodgePrice } from './model/lodge_price.model';
import { LocationsModule } from '@/locations/locations.module';
import { UniversitiesModule } from '@/universities/universities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LodgePrice]),
    LodgesModule,
    VendorsModule,
    LocationsModule,
    UniversitiesModule,
  ],
  controllers: [LodgePriceController],
  providers: [LodgePriceService, LodgePriceModelAction],
  exports: [LodgePriceService, LodgePriceModelAction],
})
export class LodgePriceModule {}
