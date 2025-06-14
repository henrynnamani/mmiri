import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString, IsUUID } from 'class-validator';

export class LocationDto {
  @ApiProperty({ required: true, example: ['ontario', 'hilltop', 'dallas'] })
  @IsArray()
  locations: LocationInfo[];

  @ApiProperty({ required: true, example: 'dhfdfhk-slhfhlsfk-34h20-' })
  @IsString()
  @IsUUID('all')
  universityId: string;
}

export class LocationInfo {
  @ApiProperty({ required: true, example: 'Hilltop' })
  @IsString()
  @IsUUID('all')
  name: string;

  @ApiProperty({ required: true, example: '450' })
  @IsNumber()
  @IsUUID('all')
  price: number;
}
