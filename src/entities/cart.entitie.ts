import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinTable,
  } from "typeorm";
  
  import { User } from "./user.entitie";
  import { Dvd } from "./dvd.entitie";
  @Entity()
  export class Cart {
    @PrimaryGeneratedColumn("uuid")
    cartUuid?: string;
  

    @Column({ default: false })
    paid: boolean;
  

    @Column("float", { default: 0 })
    total: number;
  

    @ManyToOne(() => User, (user) => user.cart, {
      eager: true
    })
    user: User
  

    @ManyToOne((type) => Dvd, { eager: true })
    @JoinTable()
    dvd: Dvd;
  }