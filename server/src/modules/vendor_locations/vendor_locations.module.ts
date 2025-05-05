import { Module } from '@nestjs/common';
import { VendorLocationsService } from './vendor_locations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorLocation } from './model/vendor_locations.model';
import { VendorLocationModelAction } from './model/vendor_locations.model-action';
import { LocationsService } from '@modules/locations/locations.service';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { LocationModelAction } from '@modules/locations/model/locations.model-action';
import { Location } from '@modules/locations/model/locations.model';
import { UniversitiesModule } from '@modules/universities/universities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendorLocation, Location]),
    VendorsModule,
    UniversitiesModule,
  ],
  providers: [
    VendorLocationsService,
    VendorLocationModelAction,
    LocationsService,
    LocationModelAction,
  ],
})
export class VendorLocationsModule {}
