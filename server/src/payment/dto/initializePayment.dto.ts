import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InitializePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEmail()
  @IsString()
  email: string;
}

// steps
// - create payment record ->
//
// - order record
