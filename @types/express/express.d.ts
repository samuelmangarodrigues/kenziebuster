import { Cart } from "../../src/entities/cart.entite";
import { DvD } from "../../src/entities/dvd.entite";
import {User} from "../../src/entities/User"

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated:User | DvD;
      decoded: Partial<User>;
      cart:Cart
      dvd:DvD
    }
  }
}
