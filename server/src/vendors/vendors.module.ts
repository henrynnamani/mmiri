import { forwardRef, Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import { VendorLocationsService } from '@/vendor_locations/vendor_locations.service';
import { LocationsModule } from '@/locations/locations.module';
import { VendorLocationModelAction } from '@/vendor_locations/model/vendor_locations.model-action';
import { VendorLocation } from '@/vendor_locations/model/vendor_locations.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vendor, VendorLocation]),
    LocationsModule,
  ],
  controllers: [VendorsController],
  providers: [
    VendorsService,
    VendorModelAction,
    VendorLocationsService,
    VendorLocationModelAction,
  ],
  exports: [VendorsService, VendorModelAction, VendorLocationsService],
})
export class VendorsModule {}
