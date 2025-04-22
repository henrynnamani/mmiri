import { Controller, Get, Param } from '@nestjs/common';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Get('')
  getAllVendors() {
    return this.vendorsService.getAllVendors();
  }

  @Get(':id')
  getVendorsByLocation(@Param('id') id: string) {
    return this.vendorsService.getVendorsByLocation(id);
  }

  @Get(':id')
  getVendorsByLodge(@Param('id') id: string) {
    return this.vendorsService.getVendorsByLodge(id);
  }
}
