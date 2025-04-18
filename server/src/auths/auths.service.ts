import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auths.dto';
import { UsersService } from '@/users/users.service';
import * as SYS_MSG from '@/common/system-message';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/users/model/users.model';

@Injectable()
export class AuthsService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // check if user already exist
    const userExist = await this.usersService.getUserByEmail(registerDto.email);

    if (userExist) {
      throw new BadRequestException(SYS_MSG.USER_ALREADY_EXIST);
    }
    // hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // create user
    await this.usersService.createUser({
      ...registerDto,
      password: hashedPassword,
    });

    const createdUser = await this.usersService.getUserByEmail(
      registerDto.email,
    );

    if (!createdUser) {
      throw new InternalServerErrorException(SYS_MSG.USER_NOT_CREATED);
    }

    const { access_token } = this.generateToken(createdUser);

    return {
      data: {
        user: createdUser,
        access_token,
      },
    };
  }

  async login(loginDto: LoginDto) {
    const userExist = await this.usersService.getUserByEmail(loginDto.email);

    if (!userExist) {
      throw new NotFoundException(SYS_MSG.USER_NOT_FOUND);
    }

    const validPassword = await this.verifyPassword(
      userExist.password,
      loginDto.password,
    );

    if (!validPassword) {
      throw new UnauthorizedException(SYS_MSG.INVALID_CREDENTIALS);
    }

    const { access_token } = this.generateToken(userExist);

    return {
      data: {
        user: userExist,
        access_token,
      },
    };
  }

  generateToken(user: User) {
    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);
    // const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    return { access_token };
  }

  async verifyPassword(hashedPassword: string, password: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}
