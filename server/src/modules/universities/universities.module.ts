import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { University } from './model/universities.model';
import { UniversityModelAction } from './model/universities.model-action';

@Module({
  imports: [TypeOrmModule.forFeature([University])],
  controllers: [UniversitiesController],
  providers: [UniversitiesService, UniversityModelAction],
  exports: [UniversitiesService, UniversityModelAction],
})
export class UniversitiesModule {}
