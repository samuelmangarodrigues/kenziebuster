import { NextFunction, Request,Response } from "express";
import dvdRepository from "../repositories/dvds"


const verifyDvdExistsMiddleware= async(req:Request,res:Response,next:NextFunction)=>{

    const {id} = req.params

    const findDvd = await dvdRepository.findOne({dvdUuid:id})

    if(!findDvd){
        return res.status(404).json({
            message:"Dvd not find"
        })
    }
    if(findDvd.stock.quantity < req.body.quantity){
        return res.status(422).json({
            "error":`current stock: ${findDvd.stock.quantity}, received demand ${req.body.quantity}`
        })
    }
    if(req.body.quantity <= 0){
        return res.status(422).json({
            "error":`the quantity must be greater than ${req.body.quantity}`
        })
    }
    return next()

}
export default verifyDvdExistsMiddleware
