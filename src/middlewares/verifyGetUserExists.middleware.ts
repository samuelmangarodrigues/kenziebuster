import userRepositorie from "../repositories/users"
import { NextFunction, Request,Response } from "express";


const verifyGetUser = async(req:Request,res:Response,next:NextFunction) =>{
    const {id} = req.params
    const findUser = await userRepositorie.retrieve({userUuid:id})

    if (!findUser){
        return res.status(400).json({
            message:"User not find"
        })
    }
    return next()
}

export default verifyGetUser