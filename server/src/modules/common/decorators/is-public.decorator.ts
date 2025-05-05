import { SetMetadata } from '@nestjs/common';

export const IsPublic = 'IS_PUBLIC';
export const skipAuth = () => SetMetadata(IsPublic, true);
