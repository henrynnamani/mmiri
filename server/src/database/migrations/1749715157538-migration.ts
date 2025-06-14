import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749715157538 implements MigrationInterface {
    name = 'Migration1749715157538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "subaccount" TO "recipientCode"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "recipientCode" TO "subaccount"`);
    }

}
