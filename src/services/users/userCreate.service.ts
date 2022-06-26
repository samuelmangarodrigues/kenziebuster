import { Request,Response } from "express"
import { User } from "../../entities/user.entite"
import { hash } from "bcrypt"
import userRepository from "../../repositories/users"
import { serializedCreateUserSchema } from "../../schemas/userSchema"
import { Cart } from "../../entities/cart.entite"
import cartRepository from "../../repositories/cart"

const userCreateService =async({validated}:Request):Promise<Partial<User>>=>{

    const userValidated = validated as User

    userValidated.password = await hash(userValidated.password,10)


    const newCart = new Cart()
    newCart.total = 0
    newCart.paid = false
    newCart.dvds = []
    await cartRepository.save(newCart)

    userValidated.cart = newCart
    
    const user = await userRepository.save({...userValidated})
        
    
    return serializedCreateUserSchema.validate(user,{
        stripUnknown:true
    })
}
export default userCreateService