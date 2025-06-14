import { forwardRef, Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderModelAction } from './model/order.model-action';
import { UsersService } from '@modules/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './model/order.model';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { UsersModelAction } from '@modules/users/model/users.model-action';
import { User } from '@modules/users/model/users.model';
import { LodgePriceService } from '@modules/lodge_price/lodge_price.service';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import { LodgesModule } from '@modules/lodges/lodges.module';
import { LocationsModule } from '@modules/locations/locations.module';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
import { TelegramModule } from '@modules/telegram/telegram.module';
import { PaymentModule } from '@modules/payment/payment.module';
import { OrderController } from './order.controller';
import { OrderProcessor } from './order.processor';
import { OrderGateway } from './order.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, User, LodgePrice]),
    LodgesModule,
    LocationsModule,
    forwardRef(() => VendorsModule),
    forwardRef(() => TelegramModule),
    forwardRef(() => PaymentModule),
  ],
  controllers: [OrderController],
  providers: [
    OrderService,
    OrderModelAction,
    UsersService,
    UsersModelAction,
    LodgePriceService,
    LodgePriceModelAction,
    OrderProcessor,
    OrderGateway,
  ],
  exports: [OrderService, OrderModelAction],
})
export class OrderModule {}
