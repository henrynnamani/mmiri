import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1744988600091 implements MigrationInterface {
  name = 'Migration1744988600091';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "phoneNumber" character varying NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phoneNumber"`);
  }
}
