import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDto } from './dto/location.dto';
import {
  GetLocationLodgesDoc,
  GetLocationVendorDoc,
  LocationDoc,
} from './doc/locations.doc';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('')
  @LocationDoc()
  createLocation(@Body() locationData: LocationDto) {
    return this.locationsService.createLocation(locationData);
  }

  @Get(':id/lodges')
  @GetLocationLodgesDoc()
  getLocationLodges(@Param('id') id: string) {
    return this.locationsService.getLocationLodges(id);
  }

  @Get(':id/vendors')
  @GetLocationVendorDoc()
  getLocationVendors(@Param('id') id: string) {
    return this.locationsService.getLocationVendors(id);
  }
}
