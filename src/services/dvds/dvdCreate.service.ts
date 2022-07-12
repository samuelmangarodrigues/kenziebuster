import { Request } from "express";
import { Stock } from "../../entities/stock.entitie";
import dvdRepository from "../../repositories/dvds"
import { serializedDvdSchema } from "../../schemas/dvdSchema";
import stockRepository from "../../repositories/stock"
import { Dvd } from "../../entities/dvd.entitie";


const dvdCreateService= async({validated,body}:Request)=>{
    const dvd = validated as Dvd
    const stock = new Stock()
    stock.price = body.price
    stock.quantity = body.quantity
    
    const newStock = await stockRepository.save(stock)

    dvd.stock = newStock

    const newDvd = await dvdRepository.save(dvd)


    return serializedDvdSchema.validate(newDvd,{stripUnknown:true})
}

export default dvdCreateService
