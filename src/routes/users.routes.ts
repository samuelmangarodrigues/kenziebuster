import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import verifyUserExists from "../middlewares/verifyUserExists.middleware";
import validadeSchema from "../middlewares/validateSchema.middleware";
import verifyGetUser from "../middlewares/verifyGetUserExists.middleware";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware";
import userLoginController from "../controllers/users/userLogin.controller";
import validateToken from "../middlewares/verifyToken.middleware";
import { loginSchema } from "../schemas/userSchema";
import { userCreateSchema } from "../schemas/userSchema";
const route=Router()

export const userRoutes=()=>{
    route.post("/register",verifyIsAdm,validadeSchema(userCreateSchema),verifyUserExists,userCreateController)
    route.post("/login",validadeSchema(loginSchema),userLoginController)
    return route
}
