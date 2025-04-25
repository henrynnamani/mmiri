import { Injectable, NotFoundException } from '@nestjs/common';
import { LodgePriceDto } from './dto/lodge_price.dto';
import { VendorsService } from '@/vendors/vendors.service';
import { LodgesService } from '@/lodges/lodges.service';
import { LodgePriceModelAction } from './model/lodge_price.model-action';
import * as SYS_MSG from '@/common/system-message';

@Injectable()
export class LodgePriceService {
  constructor(
    private vendorsService: VendorsService,
    private lodgesService: LodgesService,
    private lodgePriceModelAction: LodgePriceModelAction,
  ) {}

  async setLodgeCharge(lodgePriceDto: LodgePriceDto) {
    const vendorExist = await this.vendorsService.getVendorById(
      lodgePriceDto.vendorId,
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

    const priceResponse = await this.lodgePriceModelAction.create({
      createPayload: {
        lodge: lodgeExist,
        vendor: vendorExist,
        price: lodgePriceDto.price,
      },
      transactionOptions: {
        useTransaction: false,
      },
    });

    return {
      data: priceResponse,
      message: SYS_MSG.PRICE_SET_SUCCESSFULLY,
    };
  }

  async getLodgePrice(vendorId: string, lodgeId: string) {
    return this.lodgePriceModelAction.get({
      getRecordIdentifierOption: {
        vendorId,
        lodgeId,
      },
    });
  }

  async updateLodgeCharge(loggedInUser: string, id: string, price: number) {
    const lodgePriceExist = await this.lodgePriceModelAction.get({
      getRecordIdentifierOption: { id },
    });

    if (!lodgePriceExist) {
      throw new NotFoundException(SYS_MSG.VENDOR_LODGE_RECORD_NOT_FOUND);
    }

    // I need to get lodge_price id of the vendor
    const payload = {
      price,
    };

    const response = await this.lodgePriceModelAction.update({
      identifierOptions: { id },
      updatePayload: payload,
      transactionOption: {
        useTransaction: false,
      },
    });

    console.log(response);

    return {
      data: response,
    };
  }
}
