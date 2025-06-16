import { Injectable, NotFoundException } from '@nestjs/common';
import { LodgePriceDto } from './dto/lodge_price.dto';
import { VendorsService } from '@modules/vendors/vendors.service';
import { LodgesService } from '@modules/lodges/lodges.service';
import { LodgePriceModelAction } from './model/lodge_price.model-action';
import * as SYS_MSG from '@modules/common/system-message';

@Injectable()
export class LodgePriceService {
  constructor(
    private lodgesService: LodgesService,
    private readonly vendorsService: VendorsService,
    private lodgePriceModelAction: LodgePriceModelAction,
  ) {}

  async setVendorLodge(lodgePriceDto: LodgePriceDto) {
    const vendorExist = await this.vendorsService.getVendorByChatId(
      lodgePriceDto.chatId,
    );

    if (!vendorExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_NOT_FOUND);
    }

    const lodgeExist = await this.lodgesService.getLodgeById(
      lodgePriceDto.lodgeId,
    );

    if (!lodgeExist) {
      throw new NotFoundException(SYS_MSG.LODGE_NOT_FOUND);
    }

    const response = await this.lodgePriceModelAction.create({
      createPayload: {
        lodge: lodgeExist,
        vendor: vendorExist,
      },
      transactionOptions: {
        useTransaction: false,
      },
    });

    return {
      data: response,
      message: SYS_MSG.PRICE_SET_SUCCESSFULLY,
    };
  }
}
