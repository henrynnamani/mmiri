import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class LodgePriceDto {
  @ApiProperty({
    description: 'Vendor ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsNumber()
  @IsUUID('all')
  chatId: number;

  @ApiProperty({
    description: 'Lodge ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: true,
  })
  @IsString()
  @IsUUID()
  lodgeId: string;
}

export class UpdateChargeDto {
  @ApiProperty({
    description: 'Price',
    example: 65,
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
