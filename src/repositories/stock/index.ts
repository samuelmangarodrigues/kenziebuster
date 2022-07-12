import { Repository } from "typeorm";
import { Stock } from "../../entities/stock.entitie";
import AppDataSource from "../../data-source";




interface IStockRepository {
    save: (dvd: Partial<Stock>) => Promise<Stock>;
}


class stockRepository implements IStockRepository {
  private repo: Repository<Stock>;

  constructor() {
    this.repo = AppDataSource.getRepository(Stock);
  }

  save = async (stock: Partial<Stock>) => await this.repo.save(stock);
}

export default new stockRepository();