import { AppDataSource } from "../../data-source";
import { DeleteResult,UpdateResult,Repository } from "typeorm";
import { User } from "../../entities/user.entite";
import { hash } from "bcrypt";
import { Cart } from "../../entities/cart.entite";


interface ICartRepo{
    save:(cart:Partial<Cart>)=>Promise<Cart>
    updated:(uuid:string,payload:Partial<Cart>)=>Promise<UpdateResult>
    delete:(uuid:string)=>Promise<DeleteResult>
    retrieve:(payload:object)=>Promise<Cart|null>

}

class CartRepository implements ICartRepo{
    private repo:Repository<Cart>

    constructor(){
        this.repo = AppDataSource.getRepository(Cart)
    }

    save =async (cart:Partial<Cart>) => await this.repo.save(cart);
    updated= async (uuid: string, payload: Partial<Cart>) =>{
        return this.repo.update(uuid,{...payload})
    }
    delete=async (uuid: string) =>await this.repo.delete(uuid);

    retrieve =async( payload:object)=>await this.repo.findOneBy({...payload})
}
export default new CartRepository()