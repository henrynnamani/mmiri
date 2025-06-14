import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import {
  CompleteOrderDoc,
  PlaceOrderDoc,
} from './docs/order.doc';


@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @PlaceOrderDoc()
  placeOrder(@Body() order: OrderDto, @Req() request) {
    const loggedInUser = request.user.sub;
    return this.orderService.placeOrder(loggedInUser, order);
  }

  // @Put(':orderId')
  // @CompleteOrderDoc()
  // completeOrder(@Param('orderId', ParseUUIDPipe) orderId: string) {
  //   return this.orderService.completeOrder(orderId);
  // }
}
