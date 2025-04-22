import { Injectable, NotFoundException } from '@nestjs/common';
import { LocationDto } from './dto/location.dto';
import { LocationModelAction } from './model/locations.model-action';
import { UniversitiesService } from '@/universities/universities.service';
import { dataSource } from 'database/datasource';

@Injectable()
export class LocationsService {
  constructor(
    private locationModelAction: LocationModelAction,
    private universitiesService: UniversitiesService,
  ) {}

  async createLocation(locationDto: LocationDto) {
    let createLocation;
    const university = await this.universitiesService.findUniversityById(
      locationDto.universityId,
    );

    if (!university) {
      throw new NotFoundException('University not found');
    }

    await dataSource.transaction(async (manager) => {
      createLocation = locationDto.locations.map((location) =>
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
    });

    const createdLocations = await Promise.all(createLocation);

    return {
      data: createdLocations,
      message: 'Locations created successfully',
    };
  }
}
