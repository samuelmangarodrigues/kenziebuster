import { Column, PrimaryColumn,Entity, OneToMany, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { Cart } from "./cart.entite";
import {Stock} from "./stock.entite"


@Entity()
export class DvD{

    @PrimaryGeneratedColumn("uuid")
    dvdUuid:string


    @Column()
    name:string


    @Column()
    duration:string

    @ManyToOne(type => Stock, stock => stock.dvd)
    stock: Stock

   


}