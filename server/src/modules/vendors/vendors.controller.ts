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
import { GetAllVendorsDoc, getVendorOrdersDoc } from './doc/vendors.doc';
import { Role } from '@modules/common/enums';
import { Roles } from '@modules/common/decorators/role.decorator';
import { OrderService } from '@modules/order/order.service';

@Roles(Role.VENDOR)
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

  // @Patch(':chatId')
  // @UseGuards(VendorGuard)
  // @ChangeAvailabilityStatusDoc()
  // changeAvailabilityStatus(@Param('id') vendorId: string) {
  //   return this.vendorsService.changeAvailabilityStatus(vendorId);
  // }

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
