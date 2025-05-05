import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@modules/common/system-message';

export class CreateLodgePriceSuccessResponse {
  @ApiProperty({
    example: {
      lodge: {
        id: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
        createdAt: '2025-04-23T11:22:12.474Z',
        updatedAt: '2025-04-23T11:22:12.474Z',
        name: 'Solomon',
      },
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
      price: 80,
      vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
      lodgeId: 'f2b3b726-5262-405a-a47d-54767a21cf2c',
      id: '3ca39234-a55b-4a0a-9d63-03c17e8de064',
      createdAt: '2025-04-28T08:21:09.959Z',
      updatedAt: '2025-04-28T08:21:09.959Z',
    },
  })
  data: object;
  @ApiProperty({ type: String, example: SYS_MSG.PRICE_SET_SUCCESSFULLY })
  message: string;
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
}

export class UpdateLodgePriceSuccessResponse {
  @ApiProperty({ type: String, example: 'Lodge price updated successfully' })
  message: string;
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({
    example: {
      id: '7fb29cff-5951-49e2-941d-ee1825b1fd8d',
      createdAt: '2025-04-24T16:21:31.584Z',
      updatedAt: '2025-04-28T08:31:18.191Z',
      vendorId: '53e876c9-248a-4663-9024-37921c5e7616',
      lodgeId: '7a43ed84-9114-41c7-9a04-82aed8b8f25c',
      price: 200,
    },
  })
  data: object;
}

export class LodgePriceNotFoundDto {
  @ApiProperty({ type: String, example: 'Lodge price not found' })
  message: string;
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
}
