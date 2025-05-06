import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745165058186 implements MigrationInterface {
    name = 'Migration1745165058186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" ADD "phoneNumber" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "phoneNumber"`);
    }

}
