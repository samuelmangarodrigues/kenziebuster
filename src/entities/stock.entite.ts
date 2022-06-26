import { Column, PrimaryColumn,Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { DvD } from "./dvd.entite";



@Entity()
export class Stock{

    @PrimaryGeneratedColumn("uuid")
    stockUuid:string


    @Column()
    quantity:number


    @Column("float")
    price:number

    @OneToMany(type =>DvD,dvd =>dvd.stock, {
        eager: true
    })
    dvd:DvD[]

}