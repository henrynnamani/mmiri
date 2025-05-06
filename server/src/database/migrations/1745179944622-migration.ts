import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1745179944622 implements MigrationInterface {
    name = 'Migration1745179944622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "username" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendors" RENAME COLUMN "email" TO "username"`);
    }

}
