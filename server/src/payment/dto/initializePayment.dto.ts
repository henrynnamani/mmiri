import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class InitializePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEmail()
  @IsString()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;

  @IsString()
  @IsUUID()
  vendorId: string;
}

// steps
// - create payment record ->
