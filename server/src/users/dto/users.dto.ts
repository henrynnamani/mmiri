import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class UserDto {
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
