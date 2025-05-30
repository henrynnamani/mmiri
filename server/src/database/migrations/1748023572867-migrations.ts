import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1748023572867 implements MigrationInterface {
    name = 'Migrations1748023572867'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_71edd27eeb62806f6c4b5887814"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_71edd27eeb62806f6c4b5887814"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_71edd27eeb62806f6c4b5887814" FOREIGN KEY ("lodge_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_71edd27eeb62806f6c4b5887814"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_71edd27eeb62806f6c4b5887814" UNIQUE ("lodge_id")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_71edd27eeb62806f6c4b5887814" FOREIGN KEY ("lodge_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
