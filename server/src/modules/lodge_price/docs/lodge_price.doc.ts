import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { LodgePriceDto, UpdateChargeDto } from '../dto/lodge_price.dto';
import {
  CreateLodgePriceSuccessResponse,
  LodgePriceNotFoundDto,
  UpdateLodgePriceSuccessResponse,
} from './response.doc';
import { LodgeNotFoundDto } from '@modules/lodges/docs/response.doc';

export const CreateLodgePriceDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Create Lodge Price' }),
    ApiBearerAuth(),
    ApiBody({ type: LodgePriceDto }),
    ApiResponse({
      status: 201,
      description: 'Create lodge price',
      type: CreateLodgePriceSuccessResponse,
    }),
    ApiResponse({
      status: 404,
      description: 'Lodge not found',
      type: LodgeNotFoundDto,
    }),
  );
};

export const UpdateLodgePriceDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Update Lodge Price' }),
    ApiParam({
      name: 'id',
      description: 'lodge price record Id',
      required: true,
    }),
    ApiBearerAuth(),
    ApiBody({ type: UpdateChargeDto }),
    ApiResponse({
      status: 200,
      description: 'Update lodge price',
      type: UpdateLodgePriceSuccessResponse,
    }),
    ApiResponse({
      status: 404,
      description: 'Lodge price record not found',
      type: LodgePriceNotFoundDto,
    }),
  );
};
