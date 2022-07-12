import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  stockUuid?: string;


  @Column("integer")
  quantity: number;

  
  @Column("float")
  price: number;
}