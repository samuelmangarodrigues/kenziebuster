import { Request,Response } from "express"
import { hash } from "bcrypt"
import { User } from "../../entities/user.entitie"
import userRepository from "../../repositories/users"
import cartRepository from "../../repositories/cart"
import { Cart } from "../../entities/cart.entitie"
import { userCreateSerializedSchema } from "../../schemas/userSchema"


const userCreateService = async ({ validated }: Request) => {

    const newUser = validated as User

    newUser.password = await hash(newUser.password, 10);

    const newCart = new Cart();

    await cartRepository.save(newCart);
    
    newUser.cart as Cart[]
    
    newUser.cart.push(newCart)
    
    const user: User = await userRepository.save(newUser);
    
    return user

   
  };
export default userCreateService

