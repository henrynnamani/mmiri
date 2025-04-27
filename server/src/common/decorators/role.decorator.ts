import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums';

export const ROLES = 'roles';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES, roles);
