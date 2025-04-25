import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('')
  createLocation(@Body() locationData: LocationDto) {
    return this.locationsService.createLocation(locationData);
  }

  @Get(':id/lodges')
  getLocationLodges(@Param('id') id: string) {
    return this.locationsService.getLocationLodges(id);
  }

  @Get(':id/vendors')
  getLocationVendors(@Param('id') id: string) {
    return this.locationsService.getLocationVendors(id);
  }
}
