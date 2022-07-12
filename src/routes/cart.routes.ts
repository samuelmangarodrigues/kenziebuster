import { Router } from "express";
import payCartController from "../controllers/cart/payCart.controller";
import validateToken from "../middlewares/verifyToken.middleware";

const route = Router()

export const CartRoute=()=>{

    route.put("/pay",validateToken,payCartController)
    
    return route
}
