import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './model/locations.model';
import { LocationModelAction } from './model/locations.model-action';
import { UniversitiesModule } from '@/universities/universities.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UniversitiesModule],
  controllers: [LocationsController],
  providers: [LocationsService, LocationModelAction],
})
export class LocationsModule {}
