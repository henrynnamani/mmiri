import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { LoginDto, RegisterDto } from './dto/auths.dto';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @Post('signup')
  register(@Body() registerDto: RegisterDto) {
    return this.authsService.register(registerDto);
  }

  @Post('signin')
  login(@Body() loginDto: LoginDto) {
    return this.authsService.login(loginDto);
  }
}
