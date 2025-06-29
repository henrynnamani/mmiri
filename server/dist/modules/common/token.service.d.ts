import { JwtService } from '@nestjs/jwt';
import { users } from './types/types';
import { Request } from 'express';
export declare class TokenService {
    private jwtService;
    constructor(jwtService: JwtService);
    generateToken(user: users): {
        access_token: string;
    };
    verifyToken(token: string): Promise<unknown>;
    extractTokenFromHeader(request: Request): string | null;
    isTokenExpired(token: string): boolean;
    appendPayloadToRequest(token: string, request: any): void;
}
