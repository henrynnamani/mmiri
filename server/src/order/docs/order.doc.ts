import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';
import { OrderDto } from '../dto/order.dto';

export const MakeOrderDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Make order' }),
    ApiBody({
      type: OrderDto,
    }),
  );
};
