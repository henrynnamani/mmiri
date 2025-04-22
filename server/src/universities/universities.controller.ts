import { Body, Controller, Post } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversityDto } from './dto/universities.dto';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post('')
  createUniversity(@Body() universityDto: UniversityDto) {
    return this.universitiesService.createUniversity(universityDto);
  }
}
