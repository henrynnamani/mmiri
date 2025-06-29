import { EntityManager } from 'typeorm';
export type CreateRecordGenericType<CreatePayload> = {
    createPayload: CreatePayload;
    transactionOptions: {
        useTransaction: true;
        transaction: EntityManager;
    } | {
        useTransaction: false;
    };
};
