import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class OrderDto {
  @ApiProperty({
    description: 'User ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: 'Vendor ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsUUID()
  vendorId: string;

  @ApiProperty({
    description: 'Number of gallons',
    example: 10,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  noOfGallons: number;

  @ApiProperty({
    description: 'Total amount',
    example: 100,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  totalAmount: number;

  @ApiProperty({
    description: 'Payment reference',
    example: 'Abchd9...dfhsd',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  paymentReference: string;
}
