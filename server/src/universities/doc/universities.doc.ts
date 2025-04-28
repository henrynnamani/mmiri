import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { UniversityDto } from '../dto/universities.dto';
import {
  UniversitiesBadRequestDto,
  UniversitiesSuccesssDto,
} from './response.doc';

export const UniversitiesDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Create University ' }),
    ApiBearerAuth(),
    ApiBody({ type: UniversityDto }),
    ApiResponse({
      status: 201,
      description: 'University created successfully',
      type: UniversitiesSuccesssDto,
    }),
    ApiResponse({
      status: 400,
      description: 'University already exists',
      type: UniversitiesBadRequestDto,
    }),
  );
};
