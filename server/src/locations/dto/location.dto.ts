import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsUUID } from 'class-validator';

export class LocationDto {
  @ApiProperty({ required: true, example: ['ontario', 'hilltop', 'dallas'] })
  @IsArray()
  locations: string[];

  @ApiProperty({ required: true, example: 'dhfdfhk-slhfhlsfk-34h20-' })
  @IsString()
  @IsUUID('all')
  universityId: string;
}
