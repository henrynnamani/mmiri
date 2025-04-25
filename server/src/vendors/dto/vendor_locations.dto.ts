import { IsString, IsUUID } from 'class-validator';

export class VendorLocationDto {
  @IsUUID('all')
  @IsString()
  vendorId: string;

  @IsUUID('all')
  @IsString()
  locationId: string;
}
