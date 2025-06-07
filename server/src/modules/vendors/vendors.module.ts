import { forwardRef, Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendor } from './model/vendors.model';
import { VendorModelAction } from './model/vendors.model-action';
import { VendorLocation } from '@modules/vendor_locations/model/vendor_locations.model';
import { Order } from '@modules/order/model/order.model';
import { User } from '@modules/users/model/users.model';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { LocationsModule } from '@modules/locations/locations.module';
import { VendorLocationsService } from '@modules/vendor_locations/vendor_locations.service';
import { VendorLocationModelAction } from '@modules/vendor_locations/model/vendor_locations.model-action';
import { OrderService } from '@modules/order/order.service';
import { OrderModelAction } from '@modules/order/model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { UsersModelAction } from '@modules/users/model/users.model-action';
import { LodgesService } from '@modules/lodges/lodges.service';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import { LodgeModelAction } from '@modules/lodges/model/lodges.mode-action';
import { TelegramModule } from '@modules/telegram/telegram.module';
import { PaymentModule } from '@modules/payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Vendor,
      VendorLocation,
      Order,
      User,
      LodgePrice,
      Lodge,
    ]),
    LocationsModule,
    forwardRef(() => TelegramModule),
    forwardRef(() => PaymentModule)
  ],
  controllers: [VendorsController],
  providers: [
    VendorsService,
    VendorModelAction,
    VendorLocationsService,
    VendorLocationModelAction,
    OrderService,
    OrderModelAction,
    UsersService,
    LodgePriceService,
    UsersModelAction,
    LodgesService,
    LodgePriceModelAction,
    LodgeModelAction,
  ],
  exports: [VendorsService, VendorModelAction, VendorLocationsService],
})
export class VendorsModule {}
