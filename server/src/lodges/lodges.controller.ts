import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LodgesService } from './lodges.service';
import { LodgeDto } from './dto/lodges.dto';

@Controller('lodges')
export class LodgesController {
  constructor(private readonly lodgesService: LodgesService) {}

  @Post()
  addLodge(@Body() lodgeDto: LodgeDto) {
    return this.lodgesService.createLodge(lodgeDto);
  }

  @Get(':id/prices')
  getLodgePrices(@Param('id') lodgeId: string) {
    return this.lodgesService.getLodgePrices(lodgeId);
  }

  @Get(':id/vendors')
  getLodgeVendors(@Param('id') lodgeId: string) {
    return this.lodgesService.getLodgeVendors(lodgeId);
  }
}
