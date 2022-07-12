import  {Cart}  from "../../src/entities/cart.entite";
import {User} from "../../src/entities/user.entitie"
import {DvD} from "../../src/entities/dvd.entitie"
import {IDvd, IDvdCreate} from "../../src/interfaces/DvD"

declare global {
  namespace Express {
    interface Request {
      user: User;
      validated:User | DvD;
      decoded: Partial<User>;
      cart:Cart[]
      quantity: number;
      dvd: IDvdCreate[];
      allDvds:IDvd
    }
  }
}
