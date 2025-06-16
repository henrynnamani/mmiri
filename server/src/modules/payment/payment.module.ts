import { forwardRef, Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaystackController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@modules/order/model/order.model';
import { OrderModule } from '@modules/order/order.module';
import { LodgesService } from '@modules/lodges/lodges.service';
import { UsersModule } from '@modules/users/users.module';
import { LodgeModelAction } from '@modules/lodges/model/lodges.mode-action';
import { LocationsModule } from '@modules/locations/locations.module';
import { Lodge } from '@modules/lodges/model/lodges.model';
import { VendorsModule } from '@modules/vendors/vendors.module';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import { LodgePrice } from '@modules/lodge_price/model/lodge_price.model';
import { PaymentModelAction } from './model/payment.model-action';
import { Payment } from './model/payment.model';
import { TelegramModule } from '@modules/telegram/telegram.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Lodge, LodgePrice, Payment]),
    forwardRef(() => UsersModule),
    LocationsModule,
    forwardRef(() => VendorsModule),
    forwardRef(() => OrderModule),
    TelegramModule,
  ],
  controllers: [PaystackController],
  providers: [
    PaymentService,
    LodgesService,
    LodgeModelAction,
    LodgePriceModelAction,
    PaymentModelAction,
  ],
  exports: [PaymentService, PaymentModelAction],
})
export class PaymentModule {}
