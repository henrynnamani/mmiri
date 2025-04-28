import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';
import * as SYS_MSG from '@/common/system-message';

export const UserOrdersDoc = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get all user order' }),
    ApiBearerAuth(),
    ApiParam({ name: 'id', required: true, description: 'user Id' }),
    ApiResponse({ status: 200, type: UserOrderSuccessDto }),
    ApiResponse({ status: 400, type: UserBadRequestDto }),
  );
};

export class UserOrderSuccessDto {
  @ApiProperty({
    example: {
      payload: [
        {
          id: '8495fbd0-0813-4906-96b4-6f7bcc73ecb9',
          createdAt: '2025-04-26T16:03:29.257Z',
          updatedAt: '2025-04-26T16:05:47.623Z',
          userId: '2788d7a8-c524-44fe-ae78-21a286134627',
          vendorId: 'cf70c4b7-3c5e-4d96-b6e3-54cc14768e87',
          noOfGallons: 7,
          amountPayed: 1500,
          status: 'pending',
          paymentStatus: true,
          paymentReference: 'amsrm8hfqb',
        },
        {
          id: '3ee6019d-f23a-4e21-9965-83883e30fb99',
          createdAt: '2025-04-26T16:16:55.379Z',
          updatedAt: '2025-04-26T16:20:10.963Z',
          userId: '2788d7a8-c524-44fe-ae78-21a286134627',
          vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
          noOfGallons: 6,
          amountPayed: 1180,
          status: 'pending',
          paymentStatus: true,
          paymentReference: 'hnpofxmlj7',
        },
        {
          id: 'c4a8ec0e-c63b-4da3-affa-b7810ca8ab10',
          createdAt: '2025-04-28T08:53:55.546Z',
          updatedAt: '2025-04-28T08:53:55.546Z',
          userId: '2788d7a8-c524-44fe-ae78-21a286134627',
          vendorId: '2782dafe-50b1-4dce-b932-3f509662ee2d',
          noOfGallons: 3,
          amountPayed: 400,
          status: 'pending',
          paymentStatus: false,
          paymentReference: '359p0j1qo3',
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
  @ApiProperty({ type: String, description: 'List of user orders' })
  message: string;
  @ApiProperty({ type: Boolean, description: 'status of the request' })
  success: boolean;
}

export class UserBadRequestDto {
  @ApiProperty({ type: String, example: SYS_MSG.USER_NOT_FOUND })
  message: string;
  @ApiProperty({ type: String, example: false })
  success: boolean;
}
