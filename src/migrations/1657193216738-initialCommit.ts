import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1657193216738 implements MigrationInterface {
    name = 'initialCommit1657193216738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("userUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_4423c41142d3004ba5c9eb3ee46" PRIMARY KEY ("userUuid"))`);
        await queryRunner.query(`CREATE TABLE "stock" ("stockUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_ae602e6254624da7f8c13a3dd91" PRIMARY KEY ("stockUuid"))`);
        await queryRunner.query(`CREATE TABLE "dvd" ("dvdUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "duration" character varying NOT NULL, "stockStockUuid" uuid, CONSTRAINT "REL_aeed5b496bf6ae276a794f3254" UNIQUE ("stockStockUuid"), CONSTRAINT "PK_62d232446af1369acb6e7dda64a" PRIMARY KEY ("dvdUuid"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("cartUuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "paid" boolean NOT NULL DEFAULT false, "total" double precision NOT NULL DEFAULT '0', "userUserUuid" uuid, "dvdDvdUuid" uuid, CONSTRAINT "PK_8964b4d4d15fdb7faaa651831ed" PRIMARY KEY ("cartUuid"))`);
        await queryRunner.query(`ALTER TABLE "dvd" ADD CONSTRAINT "FK_aeed5b496bf6ae276a794f3254a" FOREIGN KEY ("stockStockUuid") REFERENCES "stock"("stockUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_00cf9a84518a9877e8d268da978" FOREIGN KEY ("userUserUuid") REFERENCES "user"("userUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_503107bce53e967308d20c67079" FOREIGN KEY ("dvdDvdUuid") REFERENCES "dvd"("dvdUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_503107bce53e967308d20c67079"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_00cf9a84518a9877e8d268da978"`);
        await queryRunner.query(`ALTER TABLE "dvd" DROP CONSTRAINT "FK_aeed5b496bf6ae276a794f3254a"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "dvd"`);
        await queryRunner.query(`DROP TABLE "stock"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
