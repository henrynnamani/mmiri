import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UniversityDto {
  @ApiProperty({ description: 'University name', required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
}
