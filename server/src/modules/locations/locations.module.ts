import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversitiesModule } from '@modules/universities/universities.module';
import { UniversitiesService } from '@modules/universities/universities.service';
import { LocationModelAction } from './model/locations.model-action';
import { Location } from './model/locations.model';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UniversitiesModule],
  controllers: [LocationsController],
  providers: [LocationsService, LocationModelAction, UniversitiesService],
  exports: [LocationsService, LocationModelAction],
})
export class LocationsModule {}
