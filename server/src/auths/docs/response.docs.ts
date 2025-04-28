import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@/common/system-message';

export class RegistrationSuccessResponseDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.REGISTRATION_SUCCESSFUL })
  message: string;
  @ApiProperty({
    example: {
      user: {
        id: 'f7cccdda-f2e0-4dd3-9c18-2255725bd343',
        createdAt: '2025-04-27T15:38:42.161Z',
        updatedAt: '2025-04-27T15:38:42.161Z',
        email: 'bejoyful@gmail.com',
        phoneNumber: '+2347052899465',
        available: true,
        businessName: 'Hassan',
        bankCode: '999992',
        accountNumber: '7052899465',
        subaccount: 'ACCT_u7bujbu8c2weuib',
        isActive: false,
        role: 'vendor',
      },
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2NjY2RkYS1mMmUwLTRkZDMtOWMxOC0yMjU1NzI1YmQzNDMiLCJpYXQiOjE3NDU3NzE5MjMsImV4cCI6MTc0NTc3NTUyM30.DAO6D91VowLXi3SHVPWUOMw80SKmvBBusbsiFWR_Lg0',
    },
  })
  data: object;
}

export class BadRequestResponseDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.USER_ALREADY_EXIST })
  message: string;
}

export class NotFoundResponseDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.USER_NOT_FOUND })
  message: string;
}

export class LoginBadRequestResponse {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.INVALID_CREDENTIALS })
  message: string;
}

export class LoginSuccessResponseDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: 'Login successful' })
  message: string;
  @ApiProperty({
    example: {
      user: {
        id: 'f7cccdda-f2e0-4dd3-9c18-2255725bd343',
        createdAt: '2025-04-27T15:38:42.161Z',
        updatedAt: '2025-04-27T15:38:42.161Z',
        email: 'bejoyful@gmail.com',
        phoneNumber: '+2347052899465',
        available: true,
        businessName: 'Hassan',
        bankCode: '999992',
        accountNumber: '7052899465',
        subaccount: 'ACCT_u7bujbu8c2weuib',
        isActive: false,
        role: 'vendor',
      },
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmN2NjY2RkYS1mMmUwLTRkZDMtOWMxOC0yMjU1NzI1YmQzNDMiLCJpYXQiOjE3NDU3NzE5MjMsImV4cCI6MTc0NTc3NTUyM30.DAO6D91VowLXi3SHVPWUOMw80SKmvBBusbsiFWR_Lg0',
    },
  })
  data: object;
}
