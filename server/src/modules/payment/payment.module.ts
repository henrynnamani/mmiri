import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController, PaystackController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@modules/order/model/order.model';
import { OrderModule } from '@modules/order/order.module';
import { LodgesService } from '@modules/lodges/lodges.service';
import { LodgePriceModule } from '@modules/lodge_price/lodge_price.module';
import { UsersModule } from '@modules/users/users.module';
import { LodgeModelAction } from '@modules/lodges/model/lodges.mode-action';
import { LocationsModule } from '@modules/locations/locations.module';
import { Lodge } from '@modules/lodges/model/lodges.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, Lodge]),
    LodgePriceModule,
    UsersModule,
    LocationsModule,
    OrderModule,
  ],
  controllers: [PaymentController, PaystackController],
  providers: [PaymentService, LodgesService, LodgeModelAction],
  exports: [PaymentService],
})
export class PaymentModule {}
