import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { LodgePriceService } from './lodge_price.service';
import { LodgePriceDto, UpdateChargeDto } from './dto/lodge_price.dto';
import { Roles } from '@modules/common/decorators/role.decorator';
import { Role } from '@modules/common/enums';
import { VendorGuard } from '@modules/auths/guards/vendor.guard';
import {
  CreateLodgePriceDoc,
  UpdateLodgePriceDoc,
} from './docs/lodge_price.doc';

@Controller('prices')
export class LodgePriceController {
  constructor(private readonly lodgePriceService: LodgePriceService) {}

  @Roles(Role.VENDOR)
  @UseGuards(VendorGuard)
  @Post('')
  @CreateLodgePriceDoc()
  setLodgeCharge(@Body() lodgePriceDto: LodgePriceDto) {
    return this.lodgePriceService.setLodgeCharge(lodgePriceDto);
  }

  @Patch(':id')
  @UpdateLodgePriceDoc()
  updateLodgeCharge(
    @Body() updateChargeDto: UpdateChargeDto,
    @Param('id') id: string,
    @Req() request,
  ) {
    const loggedInUser = request.user.sub;

    return this.lodgePriceService.updateLodgeCharge(
      loggedInUser,
      id,
      updateChargeDto.price,
    );
  }
}
