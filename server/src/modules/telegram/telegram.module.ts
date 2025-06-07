import { forwardRef, Module } from '@nestjs/common';
import { TelegramService } from './telegram.service';
import { TelegramController } from './telegram.controller';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { LocationsModule } from '@modules/locations/locations.module';
import { LodgePriceModule } from '@modules/lodge_price/lodge_price.module';
import { VendorsService } from '@modules/vendors/vendors.service';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { VendorModelAction } from '@modules/vendors/model/vendors.model-action';
import { VendorLocationModelAction } from '@modules/vendor_locations/model/vendor_locations.model-action';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from '@modules/vendors/model/vendors.model';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';

@Module({
  imports: [forwardRef(() => VendorsModule), LocationsModule, LodgePriceModule],
  controllers: [TelegramController],
  providers: [TelegramService],
  exports: [TelegramService],
})
export class TelegramModule {}
