import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749043041422 implements MigrationInterface {
    name = 'Migration1749043041422'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "password" TO "chatId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "chatId" TO "password"`);
    }

}
