import { AbstractModelAction } from '@modules/common/base-model.action';
import { University } from './universities.model';
import { Repository } from 'typeorm';
export declare class UniversityModelAction extends AbstractModelAction<University> {
    constructor(repository: Repository<University>);
}
