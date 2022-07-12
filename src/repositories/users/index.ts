import  AppDataSource  from "../../data-source";
import { DeleteResult,UpdateResult,Repository } from "typeorm";
import { hash } from "bcrypt";
import {User} from "../../entities/user.entitie"

interface IUserRepo{
    save:(user:User)=>Promise<User>
    updated:(uuid:string,payload:Partial<User>)=>Promise<UpdateResult>
    delete:(uuid:string)=>Promise<DeleteResult>
    retrieve:(payload:object)=>Promise<User|null>
    getAll: () =>Promise<User[]>
}

class UseRepository implements IUserRepo{
    private repo:Repository<User>

    constructor(){
        this.repo = AppDataSource.getRepository(User)
    }

    save =async (user:User) => await this.repo.save(user);
    updated= async (uuid: string, payload: Partial<User>) =>{
        if(payload.password){
            payload.password = await hash(payload.password,10)
        }
        return this.repo.update(uuid,{...payload})
    }
    delete=async (uuid: string) =>await this.repo.delete(uuid);

    retrieve =async( payload:object)=>await this.repo.findOneBy({...payload})
    getAll=async () => await this.repo.find();
}
export default new UseRepository()