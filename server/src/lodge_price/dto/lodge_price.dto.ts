import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class LodgePriceDto {
  @IsString()
  @IsUUID('all')
  vendorId: string;

  @IsString()
  @IsUUID()
  lodgeId: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class UpdateChargeDto {
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
