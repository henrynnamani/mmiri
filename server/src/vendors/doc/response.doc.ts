import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@/common/system-message';

export class GetAllVendorSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.REGISTRATION_SUCCESSFUL })
  message: string;
  @ApiProperty({
    example: {
      payload: [
        {
          id: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
          createdAt: '2025-04-23T16:31:08.993Z',
          updatedAt: '2025-04-24T07:53:36.449Z',
          email: 'hassan@gmail.com',
          phoneNumber: '+2347052899465',
          available: true,
          businessName: null,
          bankCode: null,
          accountNumber: null,
          subaccount: null,
          isActive: false,
          role: 'vendor',
        },
        {
          id: '53e876c9-248a-4663-9024-37921c5e7616',
          createdAt: '2025-04-24T13:48:59.296Z',
          updatedAt: '2025-04-24T13:48:59.296Z',
          email: 'anita@gmail.com',
          phoneNumber: '+2347052899465',
          available: true,
          businessName: null,
          bankCode: null,
          accountNumber: null,
          subaccount: null,
          isActive: false,
          role: 'vendor',
        },
        {
          id: '0b663754-ba13-4a27-ad4c-93fc1aabc81b',
          createdAt: '2025-04-26T15:48:04.509Z',
          updatedAt: '2025-04-26T15:48:04.509Z',
          email: 'victor@gmail.com',
          phoneNumber: '+2347052899465',
          available: true,
          businessName: 'Hassan',
          bankCode: '999992',
          accountNumber: '7052899465',
          subaccount: null,
          isActive: false,
          role: 'vendor',
        },
        {
          id: '983d95b9-a9db-429f-9640-d8401e2c3ef6',
          createdAt: '2025-04-26T15:49:02.878Z',
          updatedAt: '2025-04-26T15:49:02.878Z',
          email: 'penita@gmail.com',
          phoneNumber: '+2347052899465',
          available: true,
          businessName: 'Hassan',
          bankCode: '999992',
          accountNumber: '7052899465',
          subaccount: null,
          isActive: false,
          role: 'vendor',
        },
        {
          id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
          createdAt: '2025-04-26T15:49:37.694Z',
          updatedAt: '2025-04-26T15:49:37.694Z',
          email: 'bose@gmail.com',
          phoneNumber: '+2347052899465',
          available: true,
          businessName: 'Hassan',
          bankCode: '999992',
          accountNumber: '7052899465',
          subaccount: 'ACCT_41eq8zlg86xgbxt',
          isActive: true,
          role: 'vendor',
        },
        {
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
      ],
      paginationMeta: {
        total: 6,
        limit: 10,
        page: 1,
        totalPages: 1,
        hasNext: false,
        hasPrevious: false,
      },
    },
  })
  data: object;
}

export class ChangeAvailabilityStatusSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;

  @ApiProperty({ type: String, example: SYS_MSG.VENDOR_AVAILABILITY_UPDATED })
  message: string;

  @ApiProperty({
    example: {
      id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
      createdAt: '2025-04-26T15:49:37.694Z',
      updatedAt: '2025-04-27T17:19:10.954Z',
      email: 'bose@gmail.com',
      phoneNumber: '+2347052899465',
      available: false,
      businessName: 'Hassan',
      bankCode: '999992',
      accountNumber: '7052899465',
      subaccount: 'ACCT_41eq8zlg86xgbxt',
      isActive: true,
      role: 'vendor',
    },
  })
  data: object;
}

export class AddVendorServingLocationDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;

  @ApiProperty({
    type: String,
    example: SYS_MSG.VENDOR_SERVING_LOCATION_UPDATED,
  })
  message: string;

  @ApiProperty({
    example: {
      vendor: {
        id: '2782dafe-50b1-4dce-b932-3f509662ee2d',
        createdAt: '2025-04-26T15:49:37.694Z',
        updatedAt: '2025-04-27T17:19:10.954Z',
        email: 'bose@gmail.com',
        phoneNumber: '+2347052899465',
        available: false,
        businessName: 'Hassan',
        bankCode: '999992',
        accountNumber: '7052899465',
        subaccount: 'ACCT_41eq8zlg86xgbxt',
        isActive: true,
        role: 'vendor',
      },
      location: {
        id: 'f9cdaa27-e516-4885-af70-20b37ba29893',
        createdAt: '2025-04-21T23:12:47.205Z',
        updatedAt: '2025-04-21T23:12:47.205Z',
        name: 'Odenigwe',
      },
      vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
      locationId: 'f9cdaa27-e516-4885-af70-20b37ba29893',
      id: 'eb05a6dd-325b-4ed9-a5a0-951940cdd13c',
      createdAt: '2025-04-27T17:49:45.225Z',
      updatedAt: '2025-04-27T17:49:45.225Z',
    },
  })
  data: object;
}

export class VendorBadRequestResponseDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.VENDOR_FAILED_LOCATION_UPDATE })
  message: string;
}

export class VendorNotFoundResponseDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.VENDOR_NOT_FOUND })
  message: string;
}

export class VendorInternalServerResponseDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;

  @ApiProperty({ type: String, example: SYS_MSG.VENDOR_FAILED_LOCATION_UPDATE })
  message: string;
}
