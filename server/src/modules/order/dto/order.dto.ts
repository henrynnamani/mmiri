import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, isUUID, IsUUID } from 'class-validator';

export class OrderDto {
  @ApiProperty({
    description: 'Number of gallons',
    example: 10,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;

  @ApiProperty({
    description: 'Room number',
    example: 32,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  roomNumber: string;

  @ApiProperty({
    description: 'LodgeID',
    example: 'dhfd-ehdhf9sd-fhskfhdsn',
    required: true,
  })
  @IsString()
  @IsUUID()
  lodgeId: string;
}
