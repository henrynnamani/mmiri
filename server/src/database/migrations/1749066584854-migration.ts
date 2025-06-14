import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749066584854 implements MigrationInterface {
    name = 'Migration1749066584854'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "price" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD "price" integer NOT NULL`);
    }

}
