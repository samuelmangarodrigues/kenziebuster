import { hashSync } from "bcrypt";
import { MigrationInterface, QueryRunner } from "typeorm";
import dotenv from "dotenv"

dotenv.config()
const arr:object[] = []
export class initialMigration1656085972273 implements MigrationInterface {
    name = 'initialMigration1656085972273'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "dv_d" ("id" uuid NOT NULL, "name" character varying NOT NULL, "duration" character varying NOT NULL, "stockId" uuid, CONSTRAINT "PK_1097362835b43e841b3aae78058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stock" ("id" uuid NOT NULL, "quantity" integer NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_092bc1fc7d860426a1dec5aa8e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL, "paid" boolean NOT NULL DEFAULT false, "total" double precision NOT NULL, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("userUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, "cartId" uuid, CONSTRAINT "REL_342497b574edb2309ec8c6b62a" UNIQUE ("cartId"), CONSTRAINT "PK_4423c41142d3004ba5c9eb3ee46" PRIMARY KEY ("userUuid"))`);
        await queryRunner.query(`CREATE TABLE "cart_dvds_dv_d" ("cartId" uuid NOT NULL, "dvDId" uuid NOT NULL, CONSTRAINT "PK_c49bc8d2446d7fac018ab101c1b" PRIMARY KEY ("cartId", "dvDId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8bc446c4d0f42494429af41911" ON "cart_dvds_dv_d" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2c01a9ba08d8cffc0411a2e163" ON "cart_dvds_dv_d" ("dvDId") `);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD CONSTRAINT "FK_c6041b0b26914200aa894404774" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_342497b574edb2309ec8c6b62aa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_8bc446c4d0f42494429af419115" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_2c01a9ba08d8cffc0411a2e1633" FOREIGN KEY ("dvDId") REFERENCES "dv_d"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(
            `
              INSERT INTO "user"
                  ("name", "email", "password", "isAdm")
              VALUES
                  ('${process.env.ADM_NAME}', '${
              process.env.ADM_EMAIL
            }', '${hashSync(process.env.ADM_PASSWORD as string,10)}', true)
              `
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_2c01a9ba08d8cffc0411a2e1633"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_8bc446c4d0f42494429af419115"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_342497b574edb2309ec8c6b62aa"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP CONSTRAINT "FK_c6041b0b26914200aa894404774"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c01a9ba08d8cffc0411a2e163"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8bc446c4d0f42494429af41911"`);
        await queryRunner.query(`DROP TABLE "cart_dvds_dv_d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "stock"`);
        await queryRunner.query(`DROP TABLE "dv_d"`);
    }

}
