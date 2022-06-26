import { DvD } from "../../entities/dvd.entite";
import { Request} from "express";
import DvDepository from "../../repositories/dvds"
import { Stock } from "../../entities/stock.entite";
import { AppDataSource } from "../../data-source";
import { serializedDvdSchema } from "../../schemas/dvdSchema";


const dvdCreateService=async(req:Request)=>{


    const stockRepository = AppDataSource.getRepository(Stock)
    const dvdRepository = AppDataSource.getRepository(DvD)



    const dvd = new DvD()
    const stock = new Stock()

    stock.price = req.body.price
    stock.quantity = req.body.quantity

    stockRepository.create(stock) 
    await stockRepository.save(stock)

    
    dvd.duration = req.body.duration
    dvd.name = req.body.name
    dvd.stock = stock

    dvdRepository.create(dvd)
    await dvdRepository.save(dvd)


    return serializedDvdSchema.validate(dvd,{
        stripUnknown:true
    })


}
export default dvdCreateService