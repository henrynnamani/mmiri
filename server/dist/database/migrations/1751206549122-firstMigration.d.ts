import { MigrationInterface, QueryRunner } from "typeorm";
export declare class FirstMigration1751206549122 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
