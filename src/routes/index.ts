import { Express } from "express";
import { CartRoute } from "./cart.routes";
import { dvdRoutes } from "./dvd.routes";
import {userRoutes} from "./users.routes";

export const appRoutes = (app: Express) => {
  app.use("/users",userRoutes())
  // app.use("/dvds",dvdRoutes())
  // app.use("/cart",CartRoute())
};
