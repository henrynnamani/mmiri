import { Repository } from 'typeorm';
import { AbstractModelAction } from '@modules/common/base-model.action';
import { Lodge } from './lodges.model';
export declare class LodgeModelAction extends AbstractModelAction<Lodge> {
    constructor(repository: Repository<Lodge>);
}
