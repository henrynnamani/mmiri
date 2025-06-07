import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1749276074933 implements MigrationInterface {
    name = 'Migration1749276074933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd"`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "vendor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd"`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "vendor_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
