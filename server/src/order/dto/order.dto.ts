import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsString()
  @IsUUID()
  vendorId: string;

  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;
}
