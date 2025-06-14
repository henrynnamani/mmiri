import { forwardRef, Module } from '@nestjs/common';
import { LodgePriceService } from './lodge_price.service';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { LodgesModule } from '@modules/lodges/lodges.module';
import { LodgePriceModelAction } from './model/lodge_price.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LodgePrice } from './model/lodge_price.model';
import { LocationsModule } from '@modules/locations/locations.module';
import { UniversitiesModule } from '@modules/universities/universities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LodgePrice]),
    LodgesModule,
    forwardRef(() => VendorsModule),
    LocationsModule,
    UniversitiesModule,
  ],
  providers: [LodgePriceService, LodgePriceModelAction],
  exports: [LodgePriceService, LodgePriceModelAction],
})
export class LodgePriceModule {}
