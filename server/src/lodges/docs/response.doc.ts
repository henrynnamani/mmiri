import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@/common/system-message';

export class CreateLodgeSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.LODGE_CREATED_SUCCESSFULLY })
  message: string;
  @ApiProperty({
    description: '',
    example: [
      {
        name: 'Obosi',
        location: {
          id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
          createdAt: '2025-04-21T23:12:46.705Z',
          updatedAt: '2025-04-21T23:12:46.705Z',
          name: 'Hilltop',
        },
        id: '42fd3f5a-78e9-4e73-8718-9d7386a66728',
        createdAt: '2025-04-28T07:12:11.394Z',
        updatedAt: '2025-04-28T07:12:11.394Z',
      },
      {
        name: 'Akachukwu',
        location: {
          id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
          createdAt: '2025-04-21T23:12:46.705Z',
          updatedAt: '2025-04-21T23:12:46.705Z',
          name: 'Hilltop',
        },
        id: '1f226e45-e260-4ff6-9b62-c6eba8f764cb',
        createdAt: '2025-04-28T07:12:11.394Z',
        updatedAt: '2025-04-28T07:12:11.394Z',
      },
    ],
  })
  data: object;
}

export class GetLodgeVendorsDto {
  @ApiProperty({ type: String, example: 'List of lodge vendors' })
  message: string;
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({
    example: {
      payload: [
        {
          id: '6fb9d2fb-5438-49ee-a7b1-6be63d81e380',
          createdAt: '2025-04-26T09:24:50.961Z',
          updatedAt: '2025-04-26T09:24:50.961Z',
          vendor: {
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
          vendorId: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
          lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
          price: 200,
        },
        {
          id: 'f14ed663-7b96-4842-ad4a-9aedd3df08e8',
          createdAt: '2025-04-26T16:01:47.779Z',
          updatedAt: '2025-04-26T16:01:47.779Z',
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
          vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
          lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
          price: 180,
        },
        {
          id: '3abf0353-fd1b-4180-ab92-57bcb2068ef6',
          createdAt: '2025-04-27T12:31:55.432Z',
          updatedAt: '2025-04-27T12:31:55.432Z',
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
          vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
          lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
          price: 100,
        },
      ],
      paginationMeta: {
        total: 3,
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

export class LodgeNotFoundDto {
  @ApiProperty({ type: String, example: SYS_MSG.LOCATION_NOT_FOUND })
  message: string;
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
}

export class LodgeUnauthorizedDto {
  @ApiProperty({ type: String, example: SYS_MSG.USER_NOT_AUTHORIZED })
  message: string;
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
}
