import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745508390693 implements MigrationInterface {
    name = 'Migration1745508390693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c" FOREIGN KEY ("vendor_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae" FOREIGN KEY ("lodge_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_4ef2690f4e21818dbd64fdb3dae" FOREIGN KEY ("lodge_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_514ac0376d458e5aab1b7cff23c" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
