import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { PlaceOrderDoc } from './docs/order.doc';
import { Request } from 'express';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
  ) {}

  @Post()
  @PlaceOrderDoc()
  placeOrder(@Body() order: OrderDto, @Req() request) {
    const loggedInUser = request.user.sub
    return this.orderService.placeOrder(loggedInUser, order);
  }
}
