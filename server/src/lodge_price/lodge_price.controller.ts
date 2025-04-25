import { Body, Controller, Param, Patch, Post, Req } from '@nestjs/common';
import { LodgePriceService } from './lodge_price.service';
import { LodgePriceDto, UpdateChargeDto } from './dto/lodge_price.dto';

@Controller('prices')
export class LodgePriceController {
  constructor(private readonly lodgePriceService: LodgePriceService) {}

  @Post('')
  setLodgeCharge(@Body() lodgePriceDto: LodgePriceDto) {
    return this.lodgePriceService.setLodgeCharge(lodgePriceDto);
  }

  @Patch(':id')
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
