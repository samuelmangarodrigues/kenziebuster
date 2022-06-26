import userUpdateService from "../../services/users/userUpdate.service";
import { Request,Response } from "express";


 const userUpdateController = async (req: Request, res: Response) => {

    const updatedUser = await userUpdateService(req);
    return res.status(200).json(updatedUser);
  };
  
export default userUpdateController