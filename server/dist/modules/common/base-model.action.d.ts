import { DeepPartial, EntityTarget, FindOptionsWhere, ObjectLiteral, Repository } from 'typeorm';
import { GetRecord } from './types/get-record.type';
import { CreateRecordGenericType } from './types/create-record-generic.type';
import { ListRecordOption, PaginationMeta } from './types/list-record.type';
import { UpdateRecordGenerics } from './types/update-record.type';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare class AbstractModelAction<T extends ObjectLiteral> {
    protected readonly repository: Repository<T>;
    model: EntityTarget<T>;
    constructor(repository: Repository<T>, model: EntityTarget<T>);
    create(createRecord: CreateRecordGenericType<DeepPartial<T>>): Promise<T>;
    get(getRecordOption: GetRecord): Promise<T | null>;
    update(updateRecordOption: UpdateRecordGenerics<QueryDeepPartialEntity<T>, FindOptionsWhere<T>>): Promise<import("typeorm").UpdateResult>;
    list(listRecordOptions: ListRecordOption<FindOptionsWhere<T>>): Promise<{
        payload: T[];
        paginationMeta: Partial<PaginationMeta>;
    }>;
}
