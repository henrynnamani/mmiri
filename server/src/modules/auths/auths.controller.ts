import { Body, Controller, Post } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { LoginDto, RegisterDto } from './dto/auths.dto';
import { LoginDoc, RegisterDoc } from './docs/auth.docs';
import { skipAuth } from '@modules/common/decorators/is-public.decorator';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {}

  @skipAuth()
  @Post('signup')
  @RegisterDoc()
  register(@Body() registerDto: RegisterDto) {
    return this.authsService.register(registerDto);
  }

  @skipAuth()
  @Post('signin')
  @LoginDoc()
  login(@Body() loginDto: LoginDto) {
    return this.authsService.login(loginDto);
  }
}
