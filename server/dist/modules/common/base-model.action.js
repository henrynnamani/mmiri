"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractModelAction = void 0;
const pagination_1 = require("./helpers/pagination");
class AbstractModelAction {
    repository;
    model;
    constructor(repository, model) {
        this.repository = repository;
        this.model = model;
    }
    async create(createRecord) {
        const { createPayload, transactionOptions } = createRecord;
        const repository = transactionOptions.useTransaction
            ? transactionOptions.transaction.getRepository(this.model)
            : this.repository;
        const response = await repository.save(createPayload);
        return response;
    }
    get(getRecordOption) {
        const { getRecordIdentifierOption, queryOptions, relations } = getRecordOption;
        return this.repository.findOne({
            where: getRecordIdentifierOption,
            ...queryOptions,
            relations,
        });
    }
    async update(updateRecordOption) {
        const { updatePayload, identifierOptions, transactionOption } = updateRecordOption;
        const repository = transactionOption.useTransaction
            ? transactionOption.transaction.getRepository(this.model)
            : this.repository;
        const response = await repository.update(identifierOptions, updatePayload);
        return response;
    }
    async list(listRecordOptions) {
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
            paginationMeta: (0, pagination_1.computePaginationMeta)(total, +limit, +page),
        };
    }
}
exports.AbstractModelAction = AbstractModelAction;
//# sourceMappingURL=base-model.action.js.map