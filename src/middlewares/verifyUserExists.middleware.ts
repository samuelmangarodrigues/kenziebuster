import { Request,Response,NextFunction } from "express"
import userRepository from "../repositories/users"


const verifyUserExists= async(req:Request,res:Response,next:NextFunction)=>{

    const findUser=await userRepository.retrieve({
      email:req.body.email
    })
    if(findUser){
        return res.status(409).json({
            message:"Email already exists"
        })
    }
    return next()
}
export default verifyUserExists
