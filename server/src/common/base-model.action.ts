import {
  DeepPartial,
  EntityTarget,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { GetRecord } from './types/get-record.type';
import { CreateRecordGenericType } from './types/create-record-generic.type';
import { ListRecordOption, PaginationMeta } from './types/list-record.type';
import { computePaginationMeta } from './helpers/pagination';
import { UpdateRecordGenerics } from './types/update-record.type';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class AbstractModelAction<T extends ObjectLiteral> {
  model: EntityTarget<T>;
  constructor(
    protected readonly repository: Repository<T>,
    model: EntityTarget<T>,
  ) {
    this.model = model;
  }

  async create(createRecord: CreateRecordGenericType<DeepPartial<T>>) {
    const { createPayload, transactionOptions } = createRecord;

    const repository = transactionOptions.useTransaction
      ? transactionOptions.transaction.getRepository(this.model)
      : this.repository;

    const response: T | null = await repository.save(createPayload);

    return response;
  }

  get(getRecordOption: GetRecord) {
    const { getRecordIdentifierOption, queryOptions, relations } =
      getRecordOption;
    return this.repository.findOne({
      where: getRecordIdentifierOption,
      ...queryOptions,
      relations,
    });
  }

  async update(
    updateRecordOption: UpdateRecordGenerics<
      QueryDeepPartialEntity<T>,
      FindOptionsWhere<T>
    >,
  ) {
    const { updatePayload, identifierOptions, transactionOption } =
      updateRecordOption;

    const repository = transactionOption.useTransaction
      ? transactionOption.transaction.getRepository(this.model)
      : this.repository;

    const response = await repository.update(identifierOptions, updatePayload);

    return response;
  }

  async list(
    listRecordOptions: ListRecordOption<object>,
  ): Promise<{ payload: T[]; paginationMeta: Partial<PaginationMeta> }> {
    const { pagination, queryOption, relations } = listRecordOptions;

    const { limit, page } = pagination;

    const query = await this.repository.find({
      where: queryOption,
      relations,
      take: +limit,
      skip: +limit * (+page - 1),
    });

    const total = await this.repository.count({ where: queryOption });

    return {
      payload: query,
      paginationMeta: computePaginationMeta(total, +limit, +page),
    };
  }
}
