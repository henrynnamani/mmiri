import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { InitializePaymentDto } from '../dto/initializePayment.dto';
import {
  InitiatePaymentFailureDto,
  InitiatePaymentSuccessDto,
} from './response.doc';

export const InitiatePaymentDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Initiate payment' }),
    ApiBearerAuth(),
    ApiBody({
      type: InitializePaymentDto,
    }),
    ApiResponse({
      status: 200,
      type: InitiatePaymentSuccessDto,
    }),
    ApiResponse({
      status: 400,
      type: InitiatePaymentFailureDto,
    }),
  );
};
