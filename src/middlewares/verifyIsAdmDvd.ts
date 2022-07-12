import { Request,Response,NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entities/user.entitie";

const verifyIsAdmDvD=async (req:Request,res:Response,next:NextFunction)=>{
    
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(409).json({
            "message":"missing token authorization"
        })
    }
    return verify(token as string, process.env.SECRET_KEY as string, (err, decoded) => {
        if (err) {
          res.status(401).json({
            message:"Token expired"
          });
        }
        req.decoded = decoded as Partial<User>;
    
        const dec = decoded as Partial<User>
    
        
        if(!dec.isAdm){
            return res.status(401).json(
              {  "error": {
                "name": "JsonWebTokenError",
                "message": "jwt malformed"
            }}
            )
        }
        return next()
    })
      
}

export default verifyIsAdmDvD