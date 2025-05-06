import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745498150489 implements MigrationInterface {
    name = 'Migration1745498150489'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_90585a73e8f21b057d680e47e02"`);
        await queryRunner.query(`ALTER TABLE "vendors" DROP CONSTRAINT "FK_7b1fdab3900135f13436a964aee"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP COLUMN "vendorsId"`);
        await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "locationsId"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP COLUMN "vendor_id"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD "vendor_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD "location_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD CONSTRAINT "FK_fb0464cd65941d2c52c0cf1793a" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD CONSTRAINT "FK_b1a5d99c1b57fdc0c4dbd3bc410" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP CONSTRAINT "FK_b1a5d99c1b57fdc0c4dbd3bc410"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP CONSTRAINT "FK_fb0464cd65941d2c52c0cf1793a"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP COLUMN "location_id"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD "location_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP COLUMN "vendor_id"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD "vendor_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD "locationsId" uuid`);
        await queryRunner.query(`ALTER TABLE "locations" ADD "vendorsId" uuid`);
        await queryRunner.query(`ALTER TABLE "vendors" ADD CONSTRAINT "FK_7b1fdab3900135f13436a964aee" FOREIGN KEY ("locationsId") REFERENCES "vendor_locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_90585a73e8f21b057d680e47e02" FOREIGN KEY ("vendorsId") REFERENCES "vendor_locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
