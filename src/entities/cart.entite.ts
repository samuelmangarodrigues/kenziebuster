import { Column, PrimaryColumn,Entity, ManyToMany,OneToOne, Db, JoinColumn, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from "uuid"
import { DvD } from "./dvd.entite";
import { User } from "./user.entite";

@Entity()
export class Cart{

    @PrimaryGeneratedColumn("uuid")
    cartUuid:string


    @Column({default:false})
    paid?:boolean


    @Column("float")
    total:number

    @ManyToMany((type)=>DvD,{
        eager:true
    })
    @JoinTable()
    dvds:DvD[]
    
}