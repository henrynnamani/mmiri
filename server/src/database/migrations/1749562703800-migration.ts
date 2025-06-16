import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749562703800 implements MigrationInterface {
    name = 'Migration1749562703800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payments" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payments" ADD "user_id" character varying NOT NULL`);
    }

}
