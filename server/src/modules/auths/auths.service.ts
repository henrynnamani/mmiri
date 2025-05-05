import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auths.dto';
import { RegisterStrategyFactory } from './strategy/register/register-strategy.factory';
import { LoginStrategyFactory } from './strategy/login/login-strategy.factory';
import { TokenService } from '@modules/common/token.service';

@Injectable()
export class AuthsService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly registerStrategyFactory: RegisterStrategyFactory,
    private readonly loginStrategyFactory: LoginStrategyFactory,
  ) {}

  async register(registerDto: RegisterDto) {
    const strategy = this.registerStrategyFactory.getStrategy(registerDto.role);
    const createdUser = await strategy.register(registerDto);

    const { access_token } = this.tokenService.generateToken(createdUser);

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

    const { access_token } = this.tokenService.generateToken(loggedInUser);

    return {
      data: {
        user: loggedInUser,
        access_token,
      },
    };
  }
}
