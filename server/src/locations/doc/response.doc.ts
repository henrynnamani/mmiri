import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@/common/system-message';

export class LocationSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY })
  message: string;
  @ApiProperty({
    example: [
      {
        name: 'Odenigbo',
        university: {
          id: '80baa827-7a0a-4849-a9d0-c74501e00809',
          createdAt: '2025-04-21T15:44:03.373Z',
          updatedAt: '2025-04-21T15:44:03.373Z',
          name: 'University of Nigeria',
        },
        id: '19f3dd84-e100-4090-8c8f-76d59bad00cb',
        createdAt: '2025-04-27T18:44:25.898Z',
        updatedAt: '2025-04-27T18:44:25.898Z',
      },
      {
        name: 'Vet Mountain',
        university: {
          id: '80baa827-7a0a-4849-a9d0-c74501e00809',
          createdAt: '2025-04-21T15:44:03.373Z',
          updatedAt: '2025-04-21T15:44:03.373Z',
          name: 'University of Nigeria',
        },
        id: 'be27456c-ee45-411a-a323-08f081e90448',
        createdAt: '2025-04-27T18:44:25.898Z',
        updatedAt: '2025-04-27T18:44:25.898Z',
      },
    ],
  })
  data: object;
}

export class GetLocationLodgesSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY })
  message: string;
  @ApiProperty({
    example: {
      id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
      createdAt: '2025-04-21T23:12:46.705Z',
      updatedAt: '2025-04-21T23:12:46.705Z',
      name: 'Hilltop',
      lodges: [
        {
          id: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
          createdAt: '2025-04-23T11:22:12.474Z',
          updatedAt: '2025-04-23T11:22:12.474Z',
          name: 'Solomon',
        },
        {
          id: '7a43ed84-9114-41c7-9a04-82aed8b8f25c',
          createdAt: '2025-04-23T11:22:12.474Z',
          updatedAt: '2025-04-23T11:22:12.474Z',
          name: 'Paris',
        },
        {
          id: 'c978ee18-abe8-459d-8dc1-1c60e5cea869',
          createdAt: '2025-04-23T11:22:12.474Z',
          updatedAt: '2025-04-23T11:22:12.474Z',
          name: 'Udify',
        },
        {
          id: 'f5a65c65-ca4f-476e-a6aa-ad69c96c3e27',
          createdAt: '2025-04-23T11:35:37.271Z',
          updatedAt: '2025-04-23T11:35:37.271Z',
          name: 'St Agnes',
        },
      ],
    },
  })
  data: object;
}

export class GetLocationVendorSuccessDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.LOCATION_CREATED_SUCCESSFULLY })
  message: string;
  @ApiProperty({
    example: {
      id: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
      createdAt: '2025-04-21T23:12:46.705Z',
      updatedAt: '2025-04-21T23:12:46.705Z',
      name: 'Hilltop',
      vendors: [
        {
          id: 'a6dcfd0d-1914-4314-a1ae-0363bcb0c1da',
          createdAt: '2025-04-24T13:39:01.379Z',
          updatedAt: '2025-04-24T13:39:01.379Z',
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
          locationId: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
        },
        {
          id: '30bde49c-7f02-4a07-854f-98281ca33ab8',
          createdAt: '2025-04-24T13:48:27.362Z',
          updatedAt: '2025-04-24T13:48:27.362Z',
          vendor: {
            id: 'c9137b4e-ee9f-4650-9543-05340a4fb391',
            createdAt: '2025-04-24T13:47:45.730Z',
            updatedAt: '2025-04-24T13:52:03.974Z',
            email: 'henry@gmail.com',
            phoneNumber: '+2347052899465',
            available: false,
            businessName: null,
            bankCode: null,
            accountNumber: null,
            subaccount: null,
            isActive: false,
            role: 'vendor',
          },
          vendorId: 'c9137b4e-ee9f-4650-9543-05340a4fb391',
          locationId: 'bbc7f774-d4d0-4592-938b-270f2bdedca1',
        },
      ],
    },
  })
  data: object;
}

export class LocationNotFoundDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;

  @ApiProperty({ type: String, example: SYS_MSG.LOCATION_NOT_FOUND })
  message: string;
}

export class LocationUnauthorizedDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;

  @ApiProperty({ type: String, example: SYS_MSG.USER_NOT_AUTHORIZED })
  message: string;
}
