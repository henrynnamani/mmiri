import { applyDecorators } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { OrderDto } from '../dto/order.dto';

export const PlaceOrderDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Place order' }),
    ApiBearerAuth(),
    ApiBody({
      type: OrderDto,
    }),
  );
};
