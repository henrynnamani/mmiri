import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { TokenService } from '@modules/common/token.service';
import { IsPublic } from '@modules/common/decorators/is-public.decorator';
import * as SYS_MSG from '@modules/common/system-message';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(
    private tokenService: TokenService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    const isPublic = this.reflector.getAllAndOverride(IsPublic, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (isPublic) {
      return true;
    }

    const token = this.tokenService.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException(SYS_MSG.TOKEN_NOT_PROVIDED);
    }

    const tokenExpired = this.tokenService.isTokenExpired(token);

    if (tokenExpired) {
      throw new UnauthorizedException(SYS_MSG.TOKEN_EXPIRED);
    }

    const isTokenValid = await this.tokenService.verifyToken(token);

    if (!isTokenValid) {
      throw new UnauthorizedException(SYS_MSG.TOKEN_INVALID);
    }

    this.tokenService.appendPayloadToRequest(token, request);

    return true;
  }
}
