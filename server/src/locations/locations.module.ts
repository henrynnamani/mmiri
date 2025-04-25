import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './model/locations.model';
import { LocationModelAction } from './model/locations.model-action';
import { UniversitiesModule } from '@/universities/universities.module';
import { UniversitiesService } from '@/universities/universities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UniversitiesModule],
  controllers: [LocationsController],
  providers: [LocationsService, LocationModelAction, UniversitiesService],
  exports: [LocationsService, LocationModelAction],
})
export class LocationsModule {}
