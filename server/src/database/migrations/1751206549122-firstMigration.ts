import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1751206549122 implements MigrationInterface {
    name = 'FirstMigration1751206549122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "base_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_03e6c58047b7a4b3f6de0bfa8d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "order_id" uuid, "amount" integer NOT NULL, "status" boolean NOT NULL DEFAULT false, "reference" character varying, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('user', 'vendor')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, "phoneNumber" character varying, "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', "lodge_id" uuid, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid NOT NULL, "vendor_id" uuid, "noOfGallons" integer NOT NULL, "roomNumber" character varying, "status" character varying NOT NULL DEFAULT 'pending', CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."vendors_role_enum" AS ENUM('user', 'vendor')`);
        await queryRunner.query(`CREATE TABLE "vendors" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "chatId" integer, "phoneNumber" character varying NOT NULL, "available" boolean NOT NULL DEFAULT true, "businessName" character varying, "bankCode" character varying, "accountNumber" character varying, "subaccount" character varying, "isActive" boolean NOT NULL DEFAULT false, "role" "public"."vendors_role_enum" NOT NULL DEFAULT 'vendor', CONSTRAINT "PK_9c956c9797edfae5c6ddacc4e6e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lodge_price" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendorId" uuid NOT NULL, "lodgeId" uuid NOT NULL, CONSTRAINT "PK_06dc4dbe318b644b3f59bd53be1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lodges" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "locationId" uuid, CONSTRAINT "PK_ec5718f079ccec3cf11e1e13615" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "universities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_8da52f2cee6b407559fdbabf59e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "price" integer NOT NULL DEFAULT '0', "universityId" uuid, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendor_locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "vendor_id" uuid NOT NULL, "location_id" uuid NOT NULL, CONSTRAINT "PK_a88df4684c7bdc6395477cbb5b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "payments" ADD CONSTRAINT "FK_b2f7b823a21562eeca20e72b006" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_71edd27eeb62806f6c4b5887814" FOREIGN KEY ("lodge_id") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_a922b820eeef29ac1c6800e826a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b" FOREIGN KEY ("vendorId") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodge_price" ADD CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52" FOREIGN KEY ("lodgeId") REFERENCES "lodges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lodges" ADD CONSTRAINT "FK_1f5822ef2ee030c2a760769882c" FOREIGN KEY ("locationId") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "locations" ADD CONSTRAINT "FK_2928cbbca885593ed9690fd340e" FOREIGN KEY ("universityId") REFERENCES "universities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD CONSTRAINT "FK_fb0464cd65941d2c52c0cf1793a" FOREIGN KEY ("vendor_id") REFERENCES "vendors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" ADD CONSTRAINT "FK_b1a5d99c1b57fdc0c4dbd3bc410" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP CONSTRAINT "FK_b1a5d99c1b57fdc0c4dbd3bc410"`);
        await queryRunner.query(`ALTER TABLE "vendor_locations" DROP CONSTRAINT "FK_fb0464cd65941d2c52c0cf1793a"`);
        await queryRunner.query(`ALTER TABLE "locations" DROP CONSTRAINT "FK_2928cbbca885593ed9690fd340e"`);
        await queryRunner.query(`ALTER TABLE "lodges" DROP CONSTRAINT "FK_1f5822ef2ee030c2a760769882c"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_1aa55b8a3833a47f82cdaf24b52"`);
        await queryRunner.query(`ALTER TABLE "lodge_price" DROP CONSTRAINT "FK_b376cfe840fb716a6fdf2130d5b"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_f8ebf94df30e29b0e53fbdfaadd"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_a922b820eeef29ac1c6800e826a"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_71edd27eeb62806f6c4b5887814"`);
        await queryRunner.query(`ALTER TABLE "payments" DROP CONSTRAINT "FK_b2f7b823a21562eeca20e72b006"`);
        await queryRunner.query(`DROP TABLE "vendor_locations"`);
        await queryRunner.query(`DROP TABLE "locations"`);
        await queryRunner.query(`DROP TABLE "universities"`);
        await queryRunner.query(`DROP TABLE "lodges"`);
        await queryRunner.query(`DROP TABLE "lodge_price"`);
        await queryRunner.query(`DROP TABLE "vendors"`);
        await queryRunner.query(`DROP TYPE "public"."vendors_role_enum"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "payments"`);
        await queryRunner.query(`DROP TABLE "base_entity"`);
    }

}
