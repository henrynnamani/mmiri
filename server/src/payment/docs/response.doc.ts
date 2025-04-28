import { ApiProperty } from '@nestjs/swagger';

export class InitiatePaymentSuccessDto {
  @ApiProperty({
    example: {
      authorization_url: 'https://checkout.paystack.com/tijzfw4nth0lq0i',
      access_code: 'tijzfw4nth0lq0i',
      reference: '359p0j1qo3',
    },
  })
  data: object;
  @ApiProperty({
    type: String,
    example: 'Payment initiated successfully',
    description: 'A message indicating the status of the payment initiation',
  })
  message: string;
  @ApiProperty({
    type: Boolean,
    example: true,
    description: 'A boolean indicating the success of the payment initiation',
  })
  success: boolean;
}

export class InitiatePaymentFailureDto {
  @ApiProperty({
    type: String,
    example: 'Error initiating payment',
    description: 'A message indicating the failure of the payment initiation',
  })
  message: string;
  @ApiProperty({
    type: Boolean,
    example: false,
    description: 'A boolean indicating the failure of the payment initiation',
  })
  success: boolean;
}
