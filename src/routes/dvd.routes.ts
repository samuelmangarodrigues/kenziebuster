import { Router } from "express";
import validateToken from "../middlewares/verifyToken.middleware";
import dvdCreateController from "../controllers/dvd/dvdCreate.controller";
import verifyIsAdm from "../middlewares/verifyIsAdm.middleware"
import validateSchema from "../middlewares/validateSchema.middleware";
import { createDvdSchema } from "../schemas/dvdSchema";
const route=Router()

export const dvdRoutes=()=>{
    route.get("/:id",)
    route.post("/register",validateSchema(createDvdSchema),verifyIsAdm,validateToken,dvdCreateController)
    route.post("/login",)
    route.patch("/:id",)
    route.delete("/:id",)
    return route
}
