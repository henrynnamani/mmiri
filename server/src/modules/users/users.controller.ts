import { OrderService } from '@modules/order/order.service';
import { Param, Controller, Get, Query, Req } from '@nestjs/common';
import { UserOrdersDoc } from './docs/users.doc';

@Controller('users')
export class UsersController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/order')
  @UserOrdersDoc()
  async getUserOrders(@Req() request) {
    const loggedInUserId = request.user.sub;
    return await this.orderService.getUserOrders(loggedInUserId);
  }
}
