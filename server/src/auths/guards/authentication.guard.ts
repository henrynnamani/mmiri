import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as SYS_MSG from '@/common/system-message';
import { TokenService } from '@/common/token.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private tokenService: TokenService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();

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

    return true;
  }
}
