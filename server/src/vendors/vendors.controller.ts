import { Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { Roles } from '@/common/decorators/role.decorator';
import { Role } from '@/common/enums';
import { VendorGuard } from '@/auths/guards/vendor.guard';
import {
  AddVendorServingLocations,
  ChangeAvailabilityStatusDoc,
  GetAllVendorsDoc,
} from './doc/vendors.doc';

@Roles(Role.VENDOR)
@UseGuards(VendorGuard)
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Get('')
  @GetAllVendorsDoc()
  getAllVendors() {
    return this.vendorsService.getAllVendors();
  }

  @Patch(':id')
  @ChangeAvailabilityStatusDoc()
  changeAvailabilityStatus(@Param('id') vendorId: string) {
    return this.vendorsService.changeAvailabilityStatus(vendorId);
  }

  @Post(':id/locations/:locationId')
  @AddVendorServingLocations()
  addServingLocations(
    @Param('id') vendorId: string,
    @Param('locationId') locationId: string,
  ) {
    return this.vendorsService.addServingLocation(vendorId, locationId);
  }
}
