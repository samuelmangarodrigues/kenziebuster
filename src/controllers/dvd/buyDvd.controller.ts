import { Request,Response } from "express";
import buyDvdService from "../../services/dvds/buyDvd.service";



const buyDvdController=async(req:Request,res:Response)=>{

    const dvds = await buyDvdService(req,res)


    return res.status(200).json(dvds)
    
}
export default buyDvdController