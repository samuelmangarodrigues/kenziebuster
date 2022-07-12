import { Router } from "express";
import validateToken from "../middlewares/verifyToken.middleware";
import dvdCreateController from "../controllers/dvd/dvdCreate.controller";
import validateSchema from "../middlewares/validateSchema.middleware";
import { createDvdSchema } from "../schemas/dvdSchema";
import verifyIsAdmDvD from "../middlewares/verifyIsAdmDvd";
import getAllDvdController from "../controllers/dvd/getAlldvds.controller";
import buyDvdController from "../controllers/dvd/buyDvd.controller";
import verifyDvdExistsMiddleware from "../middlewares/verifyDvdExists.middleware";
const route=Router()

export const dvdRoutes=()=>{
    route.get("",verifyDvdExistsMiddleware,getAllDvdController)
    route.post("/register",verifyIsAdmDvD,validateSchema(createDvdSchema),dvdCreateController)
    // route.post("/buy/:id",validateToken,verifyDvdExistsMiddleware,buyDvdController)
    return route
}
