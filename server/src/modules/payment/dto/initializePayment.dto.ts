import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class InitializePaymentDto {
  @ApiProperty({
    description: 'Number of gallons to be purchased',
    required: true,
    example: 5,
  })
  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;

  @ApiProperty({
    description: 'lodge ID',
    required: true,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsUUID()
  lodgeId: string;

  @ApiProperty({
    description: 'ID of order',
    required: true,
    example: '8834-dhfskfh-3hsd9h3-sdh',
  })
  @IsString()
  @IsUUID()
  orderId: string;
}
