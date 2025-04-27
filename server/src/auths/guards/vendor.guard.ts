import { VendorsService } from '@/vendors/vendors.service';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as SYS_MSG from '@/common/system-message';

@Injectable()
export class VendorGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly vendorsService: VendorsService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const acceptedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    const id = request.user.sub;
    const user = await this.vendorsService.getVendorById(id);

    if (!user) throw new UnauthorizedException(SYS_MSG.USER_NOT_AUTHORIZED);

    if (acceptedRoles.includes(user.role)) {
      return true;
    }

    if (!user.isActive) {
      throw new ForbiddenException(SYS_MSG.VENDOR_NOT_ACTIVE);
    }

    return true;
  }
}
