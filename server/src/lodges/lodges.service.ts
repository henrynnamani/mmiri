import { Injectable, NotFoundException } from '@nestjs/common';
import { LodgeDto } from './dto/lodges.dto';
import { LocationsService } from '@/locations/locations.service';
import { dataSource } from 'database/datasource';
import { LodgeModelAction } from './model/lodges.mode-action';
import { LodgePriceModelAction } from '@/lodge_price/model/lodge_price.model-action';
import * as SYS_MSG from '@/common/system-message';

@Injectable()
export class LodgesService {
  constructor(
    private locationService: LocationsService,
    private lodgeModelAction: LodgeModelAction,
    private lodgePriceModelAction: LodgePriceModelAction,
  ) {}

  async createLodge(lodgeDto: LodgeDto) {
    const location = await this.locationService.findLocationById(
      lodgeDto.locationId,
    );

    if (!location) {
      throw new NotFoundException('University not found');
    }

    const lodges = await dataSource.transaction(async (manager) => {
      const lodgePromises = lodgeDto.lodges.map((lodge) =>
        this.lodgeModelAction.create({
          createPayload: {
            name: lodge,
            location: location,
          },
          transactionOptions: {
            useTransaction: true,
            transaction: manager,
          },
        }),
      );

      return await Promise.all(lodgePromises);
    });

    return {
      data: lodges,
      message: 'Locations created successfully',
    };
  }

  async getLodgeById(id: string) {
    return await this.lodgeModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }

  async getLodgePrices(lodgeId: string) {
    return await this.lodgePriceModelAction.get({
      getRecordIdentifierOption: { lodgeId },
      relations: ['lodge', 'vendor'],
    });
  }

  async getLodgeVendors(id: string) {
    const lodgeExist = await this.getLodgeById(id);

    if (!lodgeExist) {
      throw new NotFoundException(SYS_MSG.LODGE_NOT_FOUND);
    }

    const response = await this.lodgePriceModelAction.get({
      getRecordIdentifierOption: { id },
      relations: ['vendors', 'vendors.vendor'],
    });

    return {
      data: response,
    };
  }
}
