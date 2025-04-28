import { Body, Controller, Post } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversityDto } from './dto/universities.dto';
import { UniversitiesDoc } from './doc/universities.doc';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post('')
  @UniversitiesDoc()
  createUniversity(@Body() universityDto: UniversityDto) {
    return this.universitiesService.createUniversity(universityDto);
  }
}
