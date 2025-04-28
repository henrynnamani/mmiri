import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { LodgeDto } from '../dto/lodges.dto';
import {
  CreateLodgeSuccessDto,
  GetLodgeVendorsDto,
  LodgeNotFoundDto,
  LodgeUnauthorizedDto,
} from './response.doc';

export const CreateLodgeDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Create lodge' }),
    ApiBearerAuth(),
    ApiBody({ type: LodgeDto }),
    ApiResponse({
      status: 201,
      type: CreateLodgeSuccessDto,
      description: 'Lodge created successfully',
    }),
    ApiResponse({
      status: 404,
      description: 'Location not found',
      type: LodgeNotFoundDto,
    }),
  );
};

export const GetLodgeVendorsDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get lodge vendors' }),
    ApiBearerAuth(),
    ApiParam({ name: 'id', description: 'Lodge ID', required: true }),
    ApiQuery({ name: 'page', description: 'Page number', required: true }),
    ApiQuery({
      name: 'limit',
      description: 'Number of items per page',
      required: true,
    }),
    ApiResponse({
      status: 201,
      type: GetLodgeVendorsDto,
      description: 'List of lodge vendors',
    }),
    ApiResponse({
      status: 404,
      description: 'Location not found',
      type: LodgeNotFoundDto,
    }),
    ApiResponse({
      status: 401,
      description: 'User not authorized',
      type: LodgeUnauthorizedDto,
    }),
  );
};
