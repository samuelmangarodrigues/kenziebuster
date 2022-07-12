import { compare } from "bcrypt";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";

import { Cart } from "./cart.entitie";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  userUuid?: string;

  
  @Column()
  name?: string;


  @Column({ unique: true })
  email: string;


  @Column()
  password: string;


  @Column({ default: false })
  isAdm: boolean;


  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[]


  comparePwd = async (passwordToCompare: string): Promise<boolean> => {
    return await compare(passwordToCompare, this.password);
  };
}