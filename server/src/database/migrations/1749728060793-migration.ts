import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749728060793 implements MigrationInterface {
    name = 'Migration1749728060793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "recipientCode" TO "subaccount"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "transferReference"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "vendorPaid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "vendorPaid" boolean DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "transferReference" character varying`);
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "subaccount" TO "recipientCode"`);
    }

}
