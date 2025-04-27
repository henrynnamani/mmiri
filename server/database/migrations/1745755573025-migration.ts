import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1745755573025 implements MigrationInterface {
  name = 'Migration1745755573025';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."users_role_enum" AS ENUM('USER', 'VENDOR')`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER'`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."vendors_role_enum" AS ENUM('USER', 'VENDOR')`,
    );
    await queryRunner.query(
      `ALTER TABLE "vendors" ADD "role" "public"."vendors_role_enum" NOT NULL DEFAULT 'VENDOR'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "vendors" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."vendors_role_enum"`);
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
