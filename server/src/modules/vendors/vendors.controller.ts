import {
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import {
  AddVendorServingLocations,
  ChangeAvailabilityStatusDoc,
  GetAllVendorsDoc,
  getVendorOrdersDoc,
} from './doc/vendors.doc';
import { VendorGuard } from '@modules/auths/guards/vendor.guard';
import { Role } from '@modules/common/enums';
import { Roles } from '@modules/common/decorators/role.decorator';
import { OrderService } from '@modules/order/order.service';

@Roles(Role.VENDOR)
@UseGuards(VendorGuard)
@Controller('vendors')
export class VendorsController {
  constructor(
    private readonly vendorsService: VendorsService,
    private readonly orderService: OrderService,
  ) {}

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

  @Get(':id/orders')
  @getVendorOrdersDoc()
  async getVendorOrders(
    @Param('id') id: string,
    @Query('page') page: number,
    @Query('limit') limit: number,
  ) {
    return await this.orderService.getVendorOrders(id, { page, limit });
  }
}
