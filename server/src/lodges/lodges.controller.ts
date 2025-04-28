import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { LodgesService } from './lodges.service';
import { LodgeDto } from './dto/lodges.dto';
import { CreateLodgeDoc, GetLodgeVendorsDoc } from './docs/lodges.doc';

@Controller('lodges')
export class LodgesController {
  constructor(private readonly lodgesService: LodgesService) {}

  @Post()
  @CreateLodgeDoc()
  addLodge(@Body() lodgeDto: LodgeDto) {
    return this.lodgesService.createLodge(lodgeDto);
  }

  @Get(':id/vendors')
  @GetLodgeVendorsDoc()
  getLodgeVendors(
    @Param('id') lodgeId: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return this.lodgesService.getLodgeVendors(lodgeId, page, limit);
  }
}
