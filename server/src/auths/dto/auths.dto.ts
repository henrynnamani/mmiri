import { IsEmail, IsString, IsStrongPassword, Matches } from 'class-validator';

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
}
