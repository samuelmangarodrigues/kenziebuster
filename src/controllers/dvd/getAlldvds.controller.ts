import getAllDvdService from "../../services/dvds/getAlldvd.service"
import { Request, Response } from "express"


const getAllDvdController=async(req:Request,res:Response)=>{

  const allDvds = await getAllDvdService()


  return res.status(200).json(allDvds)

}
export default getAllDvdController