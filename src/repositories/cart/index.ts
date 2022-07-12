import { Repository, UpdateResult } from "typeorm";

import AppDataSource from "../../data-source";
import { Cart } from "../../entities/cart.entitie";

interface ICartRepository {
    save: (cart: Partial<Cart>) => Promise<Cart | null>;
    findOne: (payload: object) => Promise<Cart | null>;
    updated:(id:string,payload:Partial<Cart>)=>Promise<UpdateResult>
  }



class CartReposiory implements ICartRepository {
  private repo: Repository<Cart>;

  constructor() {
    this.repo = AppDataSource.getRepository(Cart);
  }

  save = async (cart: Partial<Cart>) => await this.repo.save(cart);

  updated= async (id: string, payload: Partial<Cart>) =>{
    return this.repo.update(id,{...payload})
  }
  findOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };
}
export default new CartReposiory();