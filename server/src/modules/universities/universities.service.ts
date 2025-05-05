import { BadRequestException, Injectable } from '@nestjs/common';
import { UniversityDto } from './dto/universities.dto';
import { University } from './model/universities.model';
import { UniversityModelAction } from './model/universities.model-action';
import * as SYS_MSG from '@modules/common/system-message';

@Injectable()
export class UniversitiesService {
  constructor(private readonly universityModelAction: UniversityModelAction) {}

  async createUniversity(universityDto: UniversityDto) {
    const alreadyExist = await this.findUniversityByName(universityDto.name);

    if (alreadyExist) {
      throw new BadRequestException(SYS_MSG.UNIVERSITY_ALREADY_EXIST);
    }

    const createdUniversity = await this.universityModelAction.create({
      createPayload: universityDto,
      transactionOptions: {
        useTransaction: false,
      },
    });

    if (!createdUniversity) {
      throw new BadRequestException(SYS_MSG.UNIVERSITY_CREATION_FAILED);
    }

    return { data: createdUniversity, message: SYS_MSG.UNIVERSITY_CREATED };
  }

  findUniversityByName(name: string): Promise<University | null> {
    return this.universityModelAction.get({
      getRecordIdentifierOption: { name },
    });
  }

  findUniversityById(id: string): Promise<University | null> {
    return this.universityModelAction.get({
      getRecordIdentifierOption: { id },
    });
  }
}
