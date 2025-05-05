import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745675356791 implements MigrationInterface {
    name = 'Migration1745675356791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" ADD "businessName" character varying`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "bankCode" character varying`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "accountNumber" character varying`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "subaccount" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "subaccount"`);
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "accountNumber"`);
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "bankCode"`);
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "businessName"`);
    }

}
