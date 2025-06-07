import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749281067552 implements MigrationInterface {
    name = 'Migration1749281067552'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "roomNumber" character varying NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "roomNumber"`);
    }
}
