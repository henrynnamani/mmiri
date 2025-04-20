import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/auths.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/users/model/users.model';
import { RegisterStrategyFactory } from './strategy/register-strategy.factory';
import { Vendor } from '@/vendors/model/vendors.model';

@Injectable()
export class AuthsService {
  constructor(
    private jwtService: JwtService,
    private readonly strategyFactory: RegisterStrategyFactory,
  ) {}

  async register(registerDto: RegisterDto) {
    const strategy = this.strategyFactory.getStrategy(registerDto.role);
    const createdUser = await strategy.register(registerDto);

    const { access_token } = this.generateToken(createdUser);

    return {
      data: {
        user: createdUser,
        access_token,
      },
    };
  }

  // async login(loginDto: LoginDto) {
  //   const userExist = await this.usersService.getUserByEmail(loginDto.email);

  //   if (!userExist) {
  //     throw new NotFoundException(SYS_MSG.USER_NOT_FOUND);
  //   }

  //   const validPassword = await this.verifyPassword(
  //     userExist.password,
  //     loginDto.password,
  //   );

  //   if (!validPassword) {
  //     throw new UnauthorizedException(SYS_MSG.INVALID_CREDENTIALS);
  //   }

  //   const { access_token } = this.generateToken(userExist);

  //   return {
  //     data: {
  //       user: userExist,
  //       access_token,
  //     },
  //   };
  // }

  generateToken(user: User | Vendor) {
    const payload = { sub: user.id };
    const access_token = this.jwtService.sign(payload);
    // const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { access_token };
  }
}
