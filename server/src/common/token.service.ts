import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from './types/types';
import { Request } from 'express';
import * as SYS_MSG from '@/common/system-message';

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  generateToken(user: users) {
    const payload = { sub: user.id };
    const access_token = this.jwtService.sign(payload);
    // const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { access_token };
  }

  async verifyToken(token: string): Promise<unknown> {
    try {
      const decoded = await this.jwtService.verify(token);
      return decoded;
    } catch {
      throw new UnauthorizedException(SYS_MSG.TOKEN_INVALID);
    }
  }

  extractTokenFromHeader(request: Request): string | null {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : null;
  }

  isTokenExpired(token: string) {
    const decoded = this.jwtService.decode(token);

    const tokenExpiry = new Date(decoded.exp * 1000);

    return new Date() > tokenExpiry;
  }

  appendPayloadToRequest(token: string, request) {
    const decoded = this.jwtService.decode(token);

    request.user = decoded;
  }
}
