import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PaymentDto {
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsString()
  @IsNotEmpty()
  reference: string;
}
