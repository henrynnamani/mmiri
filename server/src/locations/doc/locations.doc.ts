import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { LocationDto } from '../dto/location.dto';
import {
  GetLocationLodgesSuccessDto,
  GetLocationVendorSuccessDto,
  LocationNotFoundDto,
  LocationSuccessDto,
  LocationUnauthorizedDto,
} from './response.doc';

export const LocationDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Create new Location' }),
    ApiBody({ type: LocationDto }),
    ApiBearerAuth(),
    ApiResponse({
      status: 201,
      description: 'Location created successfully',
      type: LocationSuccessDto,
    }),
    ApiResponse({
      status: 401,
      description: 'Unauthorized',
      type: LocationUnauthorizedDto,
    }),
    ApiResponse({
      status: 404,
      description: 'Not Found',
      type: LocationNotFoundDto,
    }),
  );
};

export const GetLocationLodgesDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get lodges within a location' }),
    ApiBearerAuth(),
    ApiParam({ name: 'id', required: true, description: 'Location ID' }),
    ApiResponse({
      status: 200,
      description: 'List of location lodges',
      type: GetLocationLodgesSuccessDto,
    }),
  );
};

export const GetLocationVendorDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get location vendors' }),
    ApiBearerAuth(),
    ApiParam({ name: 'id', required: true, description: 'Location ID' }),
    ApiResponse({
      status: 200,
      description: 'List of location vendors',
      type: GetLocationVendorSuccessDto,
    }),
  );
};
