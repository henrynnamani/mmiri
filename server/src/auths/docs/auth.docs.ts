import { Role } from '@/common/enums';
import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from '../dto/auths.dto';
import {
  BadRequestResponseDto,
  LoginBadRequestResponse,
  LoginSuccessResponseDto,
  NotFoundResponseDto,
  RegistrationSuccessResponseDto,
} from './response.docs';

export const RegisterDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'User registration' }),
    ApiBody({ type: RegisterDto }),
    ApiResponse({
      status: 201,
      type: RegistrationSuccessResponseDto,
      description: 'User registered successfully',
    }),
    ApiResponse({
      status: 400,
      type: BadRequestResponseDto,
      description: 'Bad request',
    }),
    ApiResponse({
      status: 404,
      type: NotFoundResponseDto,
      description: 'Not found',
    }),
  );
};

export const LoginDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Login' }),
    ApiBody({ type: LoginDto }),
    ApiResponse({
      status: 200,
      type: LoginSuccessResponseDto,
      description: 'User logged in successfully',
    }),
    ApiResponse({
      status: 400,
      type: LoginBadRequestResponse,
      description: 'Bad request',
    }),
    ApiResponse({
      status: 404,
      type: NotFoundResponseDto,
      description: 'Not found',
    }),
  );
};

export class Register {
  email: string;
  password: string;
  businessName: string;
  bankCode: string;
  accountNumber: string;
  role: Role;
  phoneNumber: string;
}
