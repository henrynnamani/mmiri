import { UniversityDto } from './dto/universities.dto';
import { University } from './model/universities.model';
import { UniversityModelAction } from './model/universities.model-action';
export declare class UniversitiesService {
    private readonly universityModelAction;
    constructor(universityModelAction: UniversityModelAction);
    createUniversity(universityDto: UniversityDto): Promise<{
        data: University;
        message: string;
    }>;
    findUniversityByName(name: string): Promise<University | null>;
    findUniversityById(id: string): Promise<University | null>;
}
