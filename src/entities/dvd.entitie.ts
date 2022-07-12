import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
  } from "typeorm";
  import { Stock } from "./stock.entitie";
  @Entity()
  export class Dvd {
    @PrimaryGeneratedColumn("uuid")
    dvdUuid?: string;
  

    @Column()
    name: string;
  

    @Column()
    duration: string;
  
    
    @OneToOne((type) => Stock, { eager: true })
    @JoinColumn()
    stock: Stock;
  }