import {Request,Response } from "express";
import { Cart } from "../../entities/cart.entitie";
import { User } from "../../entities/user.entitie";
import dvdRepository from "../../repositories/dvds"
import stockRepository from "../../repositories/stock"
import cartRepository from "../../repositories/cart"
import dotenv from "dotenv"
import {verify} from "jsonwebtoken"
import { IUserGet } from "../../interfaces/User";
import { serializedCartSchema } from "../../schemas/cartSchema";

dotenv.config()
const buyDvdService=async(req:Request,res:Response)=>{
    const token = req.headers.authorization?.split(" ")[1];

    const {id} = req.params
    
    const findDvd =await dvdRepository.findOne({dvdUuid:id})
    if(findDvd){
        
        findDvd.stock.quantity -= req.body.quantity 
        await stockRepository.save(findDvd.stock)


        const newCart = new Cart()
        newCart.total = req.body.quantity * findDvd.stock.price
        newCart.dvd = findDvd
        newCart.paid = false             
        
        verify(token as string, process.env.SECRET_KEY as string, async (err, decoded) => {
            if (err) {
                res.status(401).json({
                    "message":"Expired Token"
                })
            }
            req.decoded = decoded as User;     
            newCart.user = req.decoded as User
           
            await cartRepository.save(newCart)

        });
        
        return serializedCartSchema.validate(newCart,{stripUnknown:true})
        
    }
    
}
export default buyDvdService





