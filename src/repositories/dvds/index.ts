import { Repository, UpdateResult } from "typeorm";

import AppDataSource from "../../data-source";
import { Dvd } from "../../entities/dvd.entitie";

interface IDvdRepository {
    save: (dvd: Partial<Dvd>) => Promise<Dvd>;
    findAll: () => Promise<Dvd[]>;
    findOne: (payload: object) => Promise<Dvd | null>;
    updated:(id:string,payload:Partial<Dvd>)=>Promise<UpdateResult>
  }
  
class DvdRepository implements IDvdRepository {
  private repo: Repository<Dvd>;

  constructor() {
    this.repo = AppDataSource.getRepository(Dvd);
  }

  save = async (dvd: Partial<Dvd>) => await this.repo.save(dvd);

  findAll = async () => await this.repo.find();

  findOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };
  updated= async (id: string, payload: Partial<Dvd>) =>{
    return this.repo.update(id,{...payload})
}
}

export default new DvdRepository();