import { UniversitiesService } from './universities.service';
import { UniversityDto } from './dto/universities.dto';
export declare class UniversitiesController {
    private readonly universitiesService;
    constructor(universitiesService: UniversitiesService);
    createUniversity(universityDto: UniversityDto): Promise<{
        data: import("./model/universities.model").University;
        message: string;
    }>;
}
