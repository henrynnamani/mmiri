import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749043085367 implements MigrationInterface {
    name = 'Migration1749043085367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "chatId"`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "chatId" integer NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "chatId"`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "chatId" character varying NULL`);
    }

}
