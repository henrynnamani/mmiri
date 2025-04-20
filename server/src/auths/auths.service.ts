import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auths.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/users/model/users.model';
import { RegisterStrategyFactory } from './strategy/register/register-strategy.factory';
import { Vendor } from '@/vendors/model/vendors.model';
import { LoginStrategyFactory } from './strategy/login/login-strategy.factory';

@Injectable()
export class AuthsService {
  constructor(
    private jwtService: JwtService,
    private readonly registerStrategyFactory: RegisterStrategyFactory,
    private readonly loginStrategyFactory: LoginStrategyFactory,
  ) {}

  async register(registerDto: RegisterDto) {
    const strategy = this.registerStrategyFactory.getStrategy(registerDto.role);
    const createdUser = await strategy.register(registerDto);

    const { access_token } = this.generateToken(createdUser);

    return {
      data: {
        user: createdUser,
        access_token,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const strategy = this.loginStrategyFactory.getStrategy(loginDto.role);
    const loggedInUser = await strategy.login(loginDto);

    const { access_token } = this.generateToken(loggedInUser);

    return {
      data: {
        user: loggedInUser,
        access_token,
      },
    };
  }

  generateToken(user: User | Vendor) {
    const payload = { sub: user.id };
    const access_token = this.jwtService.sign(payload);
    // const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { access_token };
  }
}
