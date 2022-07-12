import { Request,Response } from "express";
import payCartService from "../../services/cart/payCart.service";


const payCartController=async(req:Request,res:Response)=>{
    const newPayment = payCartService(req,res)



    return res.status(200).json(newPayment)
}
export default payCartController