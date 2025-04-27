import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class InitializePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;

  @IsString()
  @IsUUID()
  vendorId: string;
}
