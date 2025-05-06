import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745514800414 implements MigrationInterface {
    name = 'Migration1745514800414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodges" DROP CONSTRAINT "FK_5a1b7c4143c9d1394c4265e6bbf"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae"`);
        await queryRunner.query(`ALTER TABLE "lodges" DROP COLUMN "vendorsId"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP COLUMN "lodge_id"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP COLUMN "vendor_id"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD "vendorId" uuid`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD "lodgeId" uuid`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b" FOREIGN KEY ("vendorId") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52" FOREIGN KEY ("lodgeId") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP COLUMN "lodgeId"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP COLUMN "vendorId"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD "vendor_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD "lodge_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lodges" ADD "vendorsId" uuid`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae" FOREIGN KEY ("lodge_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c" FOREIGN KEY ("vendor_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodges" ADD CONSTRAINT "FK_5a1b7c4143c9d1394c4265e6bbf" FOREIGN KEY ("vendorsId") REFERENCES "lodge_price"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
