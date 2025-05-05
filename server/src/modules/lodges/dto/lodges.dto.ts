import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsUUID } from 'class-validator';

export class LodgeDto {
  @ApiProperty({
    description: 'List of lodges',
    example: ['Lodge 1', 'Lodge 2'],
  })
  @IsArray()
  @IsString({ each: true })
  lodges: string[];

  @ApiProperty({
    description: 'Location ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsUUID()
  locationId: string;
}
