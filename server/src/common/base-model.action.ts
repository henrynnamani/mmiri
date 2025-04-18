import { DeepPartial, EntityTarget, ObjectLiteral, Repository } from 'typeorm';
import { GetRecord } from './types/get-record.type';
import { CreateRecordGenericType } from './types/create-record-generic.type';

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
}
