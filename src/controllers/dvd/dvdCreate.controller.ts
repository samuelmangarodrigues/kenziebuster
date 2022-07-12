import dvdCreateService from "../../services/dvds/dvdCreate.service";
import { Request,Response } from "express";


const dvdCreateController = async(req:Request,res:Response)=>{

    const newDvd = await dvdCreateService(req)

    return res.status(201).json(newDvd)

}
export default dvdCreateController



