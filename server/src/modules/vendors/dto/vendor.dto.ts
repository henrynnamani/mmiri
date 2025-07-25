import { Role } from '@modules/common/enums';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class VendorRegisterDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'hoyx0101@gmail.com',
    required: true,
  })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password123!',
    required: true,
  })
  @IsNumber()
  @IsOptional()
  chatId: number;

  @ApiProperty({
    description: 'Business name of the user',
    example: 'Nike',
    required: false,
  })
  @IsOptional()
  @IsString()
  businessName: string;

  @ApiProperty({
    description: 'Bank code of the user',
    example: '058',
    required: false,
  })
  @IsString()
  @IsOptional()
  bankCode: string;

  @ApiProperty({
    description: 'Account number of the user',
    example: '0123456789',
    required: false,
  })
  @IsOptional()
  @IsString()
  accountNumber: string;

  @ApiProperty({
    description: 'Role of the user',
    example: 'user',
    required: false,
  })
  @IsEnum(Role, { message: 'Role must be one of: user, vendor' })
  @IsString()
  role: Role;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '+2348123456789',
    required: false,
  })
  @IsString()
  @IsOptional()
  @Matches(/^\+234\d{10}$/, {
    message: 'Phone number must be a valid Nigerian number starting with +234',
  })
  phoneNumber: string;
}
