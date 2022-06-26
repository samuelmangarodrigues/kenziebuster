import { Column,Entity,JoinColumn,OneToOne,PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entite";
import { compare } from "bcrypt";


@Entity()
export class User{
    @PrimaryGeneratedColumn("uuid")
    userUuid:string


    @Column()
    name:string
    

    @Column()
    email:string


    @Column()
    password:string

    
    @Column({default:false})
    isAdm?:boolean
    

    @OneToOne((type)=>Cart,{
        eager:true
    })@JoinColumn()
    cart:Cart


    comparePWD =async (pwdString:string): Promise<boolean> => {
        return await compare(pwdString, this.password)     
    }

}