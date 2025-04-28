import { applyDecorators } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const UniversitiesDoc = () => {
  return applyDecorators(ApiOperation({ summary: 'Create University ' }));
};
