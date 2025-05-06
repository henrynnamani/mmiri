import { ApiProperty } from '@nestjs/swagger';
import * as SYS_MSG from '@modules/common/system-message';

export class UniversitiesSuccesssDto {
  @ApiProperty({ type: Boolean, example: true })
  success: boolean;
  @ApiProperty({ type: String, example: 'University created successfully' })
  message: string;
  @ApiProperty({
    example: {
      name: 'University of Ibadan',
      id: 'a29f1112-9a27-4839-bcca-c74c578042e0',
      createdAt: '2025-04-28T06:47:35.998Z',
      updatedAt: '2025-04-28T06:47:35.998Z',
    },
  })
  data: object;
}

export class UniversitiesBadRequestDto {
  @ApiProperty({ type: Boolean, example: false })
  success: boolean;
  @ApiProperty({ type: String, example: SYS_MSG.UNIVERSITY_CREATION_FAILED })
  message: string;
}
