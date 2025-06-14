import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749720186340 implements MigrationInterface {
    name = 'Migration1749720186340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "transferReference" character varying`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "vendorPaid" boolean DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "vendorPaid"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "transferReference"`);
    }

}
