import { Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { VendorsService } from './vendors.service';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Get('')
  getAllVendors() {
    return this.vendorsService.getAllVendors();
  }

  @Patch(':id')
  changeAvailabilityStatus(@Param('id') vendorId: string) {
    return this.vendorsService.changeAvailabilityStatus(vendorId);
  }

  @Post(':id/locations/:locationId')
  addServingLocations(
    @Param('id') vendorId: string,
    @Param('locationId') locationId: string,
  ) {
    return this.vendorsService.addServingLocation(vendorId, locationId);
  }
}
