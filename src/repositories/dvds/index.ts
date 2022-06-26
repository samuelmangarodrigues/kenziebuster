import { AppDataSource } from "../../data-source";
import { DeleteResult,UpdateResult,Repository } from "typeorm";
import { DvD } from "../../entities/dvd.entite";


interface IDvDrepo{
    save:(dvd:DvD)=>Promise<DvD>
    updated:(uuid:string,payload:Partial<DvD>)=>Promise<UpdateResult>
    delete:(uuid:string)=>Promise<DeleteResult>
    retrieve:(payload:object)=>Promise<DvD|null>
    getAll: () =>Promise<DvD[]>
}

class DvDepository implements IDvDrepo{
    private repo:Repository<DvD>

    constructor(){
        this.repo = AppDataSource.getRepository(DvD)
    }

    save =async (dvd:DvD) => await this.repo.save(dvd);
    updated= async (uuid: string, payload: Partial<DvD>) =>{
      
        return this.repo.update(uuid,{...payload})
    }
    delete=async (uuid: string) =>await this.repo.delete(uuid);

    retrieve =async( payload:object)=>await this.repo.findOneBy({...payload})
    getAll=async () => await this.repo.find();
}
export default new DvDepository()