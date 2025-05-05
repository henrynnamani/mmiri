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
    description: 'ID of the vendor',
    required: true,
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsString()
  @IsUUID()
  vendorId: string;
}
