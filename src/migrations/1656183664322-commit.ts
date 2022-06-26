import { MigrationInterface, QueryRunner } from "typeorm";

export class commit1656183664322 implements MigrationInterface {
    name = 'commit1656183664322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dv_d" DROP CONSTRAINT "FK_c6041b0b26914200aa894404774"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_342497b574edb2309ec8c6b62aa"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_8bc446c4d0f42494429af419115"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_2c01a9ba08d8cffc0411a2e1633"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8bc446c4d0f42494429af41911"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c01a9ba08d8cffc0411a2e163"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "id" TO "stockUuid"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "PK_092bc1fc7d860426a1dec5aa8e9" TO "PK_ae602e6254624da7f8c13a3dd91"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME COLUMN "id" TO "cartUuid"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" TO "PK_8964b4d4d15fdb7faaa651831ed"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cartId" TO "cartCartUuid"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "REL_342497b574edb2309ec8c6b62a" TO "UQ_acc7475f55946a0c8be4a13b6d3"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP CONSTRAINT "PK_1097362835b43e841b3aae78058"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP COLUMN "stockId"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_c49bc8d2446d7fac018ab101c1b"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_2c01a9ba08d8cffc0411a2e1633" PRIMARY KEY ("dvDId")`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP COLUMN "cartId"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_2c01a9ba08d8cffc0411a2e1633"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP COLUMN "dvDId"`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD "dvdUuid" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD CONSTRAINT "PK_dd446a0285412704e0eec03c79e" PRIMARY KEY ("dvdUuid")`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD "stockStockUuid" uuid`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD "cartCartUuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_5dd78e9efce32880906331fee47" PRIMARY KEY ("cartCartUuid")`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD "dvDDvdUuid" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_5dd78e9efce32880906331fee47"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_bcdc395a59682f9ddfd3b187e5a" PRIMARY KEY ("cartCartUuid", "dvDDvdUuid")`);
        await queryRunner.query(`ALTER TABLE "stock" ALTER COLUMN "stockUuid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "cartUuid" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`CREATE INDEX "IDX_5dd78e9efce32880906331fee4" ON "cart_dvds_dv_d" ("cartCartUuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_e0891db8b51739f9774b564af2" ON "cart_dvds_dv_d" ("dvDDvdUuid") `);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD CONSTRAINT "FK_22f03d8c9f5c2dbb04f75261679" FOREIGN KEY ("stockStockUuid") REFERENCES "stock"("stockUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_acc7475f55946a0c8be4a13b6d3" FOREIGN KEY ("cartCartUuid") REFERENCES "cart"("cartUuid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_5dd78e9efce32880906331fee47" FOREIGN KEY ("cartCartUuid") REFERENCES "cart"("cartUuid") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_e0891db8b51739f9774b564af2c" FOREIGN KEY ("dvDDvdUuid") REFERENCES "dv_d"("dvdUuid") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_e0891db8b51739f9774b564af2c"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "FK_5dd78e9efce32880906331fee47"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_acc7475f55946a0c8be4a13b6d3"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP CONSTRAINT "FK_22f03d8c9f5c2dbb04f75261679"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e0891db8b51739f9774b564af2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5dd78e9efce32880906331fee4"`);
        await queryRunner.query(`ALTER TABLE "cart" ALTER COLUMN "cartUuid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "stock" ALTER COLUMN "stockUuid" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_bcdc395a59682f9ddfd3b187e5a"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_5dd78e9efce32880906331fee47" PRIMARY KEY ("cartCartUuid")`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP COLUMN "dvDDvdUuid"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_5dd78e9efce32880906331fee47"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP COLUMN "cartCartUuid"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP COLUMN "stockStockUuid"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP CONSTRAINT "PK_dd446a0285412704e0eec03c79e"`);
        await queryRunner.query(`ALTER TABLE "dv_d" DROP COLUMN "dvdUuid"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD "dvDId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_2c01a9ba08d8cffc0411a2e1633" PRIMARY KEY ("dvDId")`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD "cartId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" DROP CONSTRAINT "PK_2c01a9ba08d8cffc0411a2e1633"`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "PK_c49bc8d2446d7fac018ab101c1b" PRIMARY KEY ("cartId", "dvDId")`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD "stockId" uuid`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD CONSTRAINT "PK_1097362835b43e841b3aae78058" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" RENAME CONSTRAINT "UQ_acc7475f55946a0c8be4a13b6d3" TO "REL_342497b574edb2309ec8c6b62a"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "cartCartUuid" TO "cartId"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME CONSTRAINT "PK_8964b4d4d15fdb7faaa651831ed" TO "PK_c524ec48751b9b5bcfbf6e59be7"`);
        await queryRunner.query(`ALTER TABLE "cart" RENAME COLUMN "cartUuid" TO "id"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME CONSTRAINT "PK_ae602e6254624da7f8c13a3dd91" TO "PK_092bc1fc7d860426a1dec5aa8e9"`);
        await queryRunner.query(`ALTER TABLE "stock" RENAME COLUMN "stockUuid" TO "id"`);
        await queryRunner.query(`CREATE INDEX "IDX_2c01a9ba08d8cffc0411a2e163" ON "cart_dvds_dv_d" ("dvDId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8bc446c4d0f42494429af41911" ON "cart_dvds_dv_d" ("cartId") `);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_2c01a9ba08d8cffc0411a2e1633" FOREIGN KEY ("dvDId") REFERENCES "dv_d"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_dvds_dv_d" ADD CONSTRAINT "FK_8bc446c4d0f42494429af419115" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_342497b574edb2309ec8c6b62aa" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dv_d" ADD CONSTRAINT "FK_c6041b0b26914200aa894404774" FOREIGN KEY ("stockId") REFERENCES "stock"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
