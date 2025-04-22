import { Body, Controller, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('')
  createLocation(@Body() locationData: LocationDto) {
    return this.locationsService.createLocation(locationData);
  }
}
