import { Request,Response } from "express";
import userDeleteUserService from "../../services/users/userDelete.service";

const userDeleteController = async (req: Request, res: Response) => {
 
    const deletedUser = await userDeleteUserService(req);

    return res.status(200).json({message:"User Deleted"});
  };

  export default userDeleteController