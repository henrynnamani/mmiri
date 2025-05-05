import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745513586534 implements MigrationInterface {
    name = 'Migration1745513586534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodges" ADD "vendorsId" uuid`);
        await queryRunner.query(`ALTER TABLE "lodges" ADD CONSTRAINT "FK_5a1b7c4143c9d1394c4265e6bbf" FOREIGN KEY ("vendorsId") REFERENCES "lodge_price"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodges" DROP CONSTRAINT "FK_5a1b7c4143c9d1394c4265e6bbf"`);
        await queryRunner.query(`ALTER TABLE "lodges" DROP COLUMN "vendorsId"`);
    }

}
