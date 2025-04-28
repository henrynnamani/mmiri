import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderModelAction } from './model/order.model-action';
import { UsersService } from '@/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './model/order.model';
import { VendorsModule } from '@/vendors/vendors.module';
import { UsersModelAction } from '@/users/model/users.model-action';
import { User } from '@/users/model/users.model';
import { LodgePriceService } from '@/lodge_price/lodge_price.service';
import { LodgePriceModelAction } from '@/lodge_price/model/lodge_price.model-action';
import { LodgesModule } from '@/lodges/lodges.module';
import { LocationsModule } from '@/locations/locations.module';
import { LodgePrice } from '@/lodge_price/model/lodge_price.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User, LodgePrice]),
    LodgesModule,
    LocationsModule,
    forwardRef(() => VendorsModule),
  ],
  providers: [
    OrderService,
    OrderModelAction,
    UsersService,
    UsersModelAction,
    LodgePriceService,
    LodgePriceModelAction,
  ],
  exports: [OrderService, OrderModelAction],
})
export class OrderModule {}
