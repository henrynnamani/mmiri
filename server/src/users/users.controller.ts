import { OrderService } from '@/order/order.service';
import { Param, Controller, Get, Query } from '@nestjs/common';
import { UserOrdersDoc } from './docs/users.doc';

@Controller('users')
export class UsersController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id/orders')
  @UserOrdersDoc()
  async getUserOrders(
    @Param('id') id: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.orderService.getUserOrders(id, { page, limit });
  }
}
