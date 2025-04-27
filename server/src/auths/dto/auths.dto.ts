import { Role } from '@/common/enums';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  Matches,
} from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 1,
  })
  password: string;

  @IsOptional()
  @IsString()
  businessName: string;

  @IsString()
  @IsOptional()
  bankCode: string;

  @IsOptional()
  @IsString()
  accountNumber: string;

  @IsEnum(Role, { message: 'Role must be one of: user, vendor, admin' })
  @IsString()
  role: Role;

  @IsString()
  @Matches(/^\+234\d{10}$/, {
    message: 'Phone number must be a valid Nigerian number starting with +234',
  })
  phoneNumber: string;
}

export class LoginDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsStrongPassword({
    minLength: 8,
    minNumbers: 1,
    minLowercase: 1,
    minSymbols: 1,
  })
  password: string;

  @IsEnum(Role, { message: 'Role must be one of: user, vendor, admin' })
  @IsString()
  role: string;
}
