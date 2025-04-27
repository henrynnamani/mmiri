import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController, PaystackController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from '@/order/model/order.model';
import { OrderModule } from '@/order/order.module';
import { LodgesService } from '@/lodges/lodges.service';
import { LodgePriceModule } from '@/lodge_price/lodge_price.module';
import { UsersModule } from '@/users/users.module';
import { LodgeModelAction } from '@/lodges/model/lodges.mode-action';
import { LocationsModule } from '@/locations/locations.module';
import { Lodge } from '@/lodges/model/lodges.model';

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
