import { EntityManager } from 'typeorm';
export interface UpdateRecordGenerics<UpdatePayload, identifierOptions> {
    updatePayload: UpdatePayload;
    identifierOptions: identifierOptions;
    transactionOption: {
        useTransaction: true;
        transaction: EntityManager;
    } | {
        useTransaction: false;
    };
}
