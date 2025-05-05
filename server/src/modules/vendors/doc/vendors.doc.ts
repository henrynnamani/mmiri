import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import {
  AddVendorServingLocationDto,
  ChangeAvailabilityStatusSuccessDto,
  GetAllVendorSuccessDto,
  VendorBadRequestResponseDto,
  VendorInternalServerResponseDto,
  VendorNotFoundResponseDto,
  VendorOrdersSuccessResponseDto,
} from './response.doc';

export const getVendorOrdersDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get vendor orders' }),
    ApiBearerAuth(),
    ApiResponse({ status: 200, type: VendorOrdersSuccessResponseDto }),
    ApiResponse({ status: 400, type: VendorBadRequestResponseDto }),
  );
};

export const GetAllVendorsDoc = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiOperation({ summary: 'Get all vendors' }),
    ApiResponse({ status: 200, type: GetAllVendorSuccessDto }),
  );
};

export const ChangeAvailabilityStatusDoc = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiParam({ name: 'id', type: String, description: 'Vendor ID' }),
    ApiOperation({ summary: 'Change availability status' }),
    ApiResponse({ status: 200, type: ChangeAvailabilityStatusSuccessDto }),
    ApiResponse({ status: 404, type: VendorNotFoundResponseDto }),
  );
};

export const AddVendorServingLocations = () => {
  return applyDecorators(
    ApiBearerAuth(),
    ApiParam({ name: 'id', type: String, description: 'Vendor ID' }),
    ApiParam({ name: 'locationId', type: String, description: 'Location ID' }),
    ApiOperation({ summary: 'Add Vendor Serving Locations' }),
    ApiResponse({ status: 200, type: AddVendorServingLocationDto }),
    ApiResponse({ status: 404, type: VendorNotFoundResponseDto }),
    ApiResponse({ status: 500, type: VendorInternalServerResponseDto }),
  );
};
