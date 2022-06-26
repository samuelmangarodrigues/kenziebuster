import { Request,Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entities/user.entite";
import { ErrorHandler } from "../errors/appErrors";
const verifyIsAdm=async (req:Request,res:Response,next:NextFunction)=>{
    
    const token = req.headers.authorization?.split(" ")[1];
    const user = req.body

        if(!user.isAdm){
            return next()
        }


        if(user.isAdm && !token){
            return res.status(401).json({    
                "error": "missing admin permision"    
            })
        }

    return verify(token as string, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
          throw new ErrorHandler(401, err.message);
        }
        req.decoded = decoded as Partial<User>;
    
        const dec = decoded as Partial<User>
    
        
        if(!dec.isAdm){
            return res.status(401).json(
              {"error": "missing authorization token"}
            )
        }
        return next()
    })
      
}

export default verifyIsAdm