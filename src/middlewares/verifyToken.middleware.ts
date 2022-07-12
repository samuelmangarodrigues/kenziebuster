import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/appErrors";
import { verify } from "jsonwebtoken";
import { config } from "dotenv";
import { User } from "../entities/user.entitie";


config();

const validateToken =(req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new ErrorHandler(401, "Missing authorization token!");
  }

  return verify(token, process.env.SECRET_KEY as string, (err, decoded) => {
    if (err) {
      res.status(401).json({
        "message":"Expired Token"
      })
    }
    req.decoded = decoded as Partial<User>;

    return next();
  });
};

export default validateToken;
