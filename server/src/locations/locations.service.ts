import { Injectable, NotFoundException } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationModelAction } from './model/locations.model-action';
import { UniversitiesService } from '@/universities/universities.service';
import { dataSource } from 'database/datasource';
import * as SYS_MSG from '@/common/system-message';

@Injectable()
export class LocationsService {
  constructor(
    private locationModelAction: LocationModelAction,
    private universitiesService: UniversitiesService,
  ) {}

  async createLocation(locationDto: LocationDto) {
    const university = await this.universitiesService.findUniversityById(
      locationDto.universityId,
    );

    if (!university) {
      throw new NotFoundException('University not found');
    }

    const locations = await dataSource.transaction(async (manager) => {
      const locationPromises = locationDto.locations.map((location) =>
        this.locationModelAction.create({
          createPayload: {
            name: location,
            university: university,
          },
          transactionOptions: {
            useTransaction: true,
            transaction: manager,
          },
        }),
      );

      return await Promise.all(locationPromises);
    });

    return {
      data: locations,
      message: 'Locations created successfully',
    };
  }

  async findLocationById(id: string) {
    return this.locationModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }

  async getLocationLodges(id: string) {
    return this.locationModelAction.get({
      getRecordIdentifierOption: { id },
      relations: ['lodges'],
    });
  }

  async getLocationVendors(id: string) {
    const locationExists = await this.findLocationById(id);

    if (!locationExists) {
      throw new NotFoundException(SYS_MSG.LOCATION_NOT_FOUND);
    }

    const response = await this.locationModelAction.get({
      getRecordIdentifierOption: { id },
      relations: ['vendors', 'vendors.vendor'],
    });

    return {
      data: response,
    };
  }
}
