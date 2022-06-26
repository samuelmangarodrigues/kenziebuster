import {Request} from "express"
import userRepositorie from "../../repositories/users"
import { serializedCreateUserSchema } from "../../schemas/userSchema"



export const userGetByIdService = async (req:Request)=>{
    const {id} = req.params
    const user = await userRepositorie.retrieve({userUuid: id})
    
    return serializedCreateUserSchema.validate(user,{stripUnknown:true})
}
