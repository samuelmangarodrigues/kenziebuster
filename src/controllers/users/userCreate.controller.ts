import userCreateService from "../../services/users/userCreate.service"
import { Request,Response } from "express";


const userCreateController= async(req:Request,res:Response)=>{
    console.log(req.body)
    const newUser = await userCreateService(req)
    console.log(newUser.cart)

    return res.status(201).json(newUser)    
}
export default userCreateController