import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
} from '@nestjs/swagger';
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

export const GetVendorByLodgeAndLocationDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get vendor by lodge' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'lodgeId',
      required: true,
    }),
    ApiParam({
      name: 'locationId',
      required: true,
    }),
  );
};

export const CompleteOrderDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Complete order' }),
    ApiBearerAuth(),
    ApiParam({
      name: 'orderId',
      required: true,
    }),
  );
};
