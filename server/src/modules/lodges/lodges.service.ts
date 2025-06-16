import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { LodgeDto } from './dto/lodges.dto';
import { LocationsService } from '@modules/locations/locations.service';
import { LodgeModelAction } from './model/lodges.mode-action';
import { LodgePriceModelAction } from '@modules/lodge_price/model/lodge_price.model-action';
import * as SYS_MSG from '@modules/common/system-message';
import { dataSource } from '@database/datasource';

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
      throw new NotFoundException(SYS_MSG.LOCATION_NOT_FOUND);
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
      message: SYS_MSG.LODGE_CREATED_SUCCESSFULLY,
    };
  }

  async getLodgeById(id: string) {
    return await this.lodgeModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }

  async getLodgeLocationPrice(id: string) {
    const response = await this.lodgeModelAction.get({
      getRecordIdentifierOption: {
        id,
      },
      relations: ['location'],
    });

    if(!response) throw new BadRequestException(SYS_MSG.LODGE_NOT_FOUND);

    const price = await this.locationService.getLocationPrice(response?.location.id);

    return price
  }

  // async getLodgePrices(lodgeId: string) {
  //   return await this.lodgePriceModelAction.get({
  //     getRecordIdentifierOption: { lodgeId },
  //     relations: ['lodge', 'vendor'],
  //   });
  // }

  async getLodgeVendors(id: string, page: number, limit: number) {
    const lodgeExist = await this.getLodgeById(id);

    if (!lodgeExist) {
      throw new NotFoundException(SYS_MSG.LODGE_NOT_FOUND);
    }

    const response = await this.lodgePriceModelAction.list({
      queryOption: { lodgeId: id },
      relations: ['vendor'],
      pagination: {
        // make dynamic
        page,
        limit,
      },
    });

    return {
      data: response,
    };
  }
}
