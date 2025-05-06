import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745686835284 implements MigrationInterface {
    name = 'Migration1745686835284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" ADD "isActive" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "isActive"`);
    }

}
