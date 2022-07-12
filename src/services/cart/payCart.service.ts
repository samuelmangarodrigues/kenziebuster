import { verify } from "jsonwebtoken";
import cartRepository from "../../repositories/cart"
import { Request,Response } from "express";
import { User } from "../../entities/user.entitie";
import { Cart } from "../../entities/cart.entitie";
import { cartSchema} from "../../schemas/cartSchema";
import { Dvd } from "../../entities/dvd.entitie";
import stock from "../../repositories/stock";
import { Stock } from "../../entities/stock.entitie";

const payCartService= async (req:Request,res:Response) =>{
    const token = req.headers.authorization?.split(" ")[1];

     
   verify(token as string, process.env.SECRET_KEY as string, async (err, decoded) => {
            if (err) {
                res.status(401).json({
                    "message":"Expired Token"
                })
            }
            req.decoded = decoded as User;     
           
            const newUser=decoded as User
            
            console.log(newUser.name)
            // await cartRepository.save(newCart)
            
            return req.decoded
        });



}
export default payCartService