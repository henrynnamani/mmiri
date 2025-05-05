import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745515230501 implements MigrationInterface {
    name = 'Migration1745515230501'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52" FOREIGN KEY ("lodgeId") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52" FOREIGN KEY ("lodgeId") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b" FOREIGN KEY ("vendorId") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
