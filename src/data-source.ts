import { DataSource } from "typeorm"
import dotenv from "dotenv"
dotenv.config()


export const AppDataSource = new DataSource({
    type:"postgres",
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_END==="production"?
    {rejectUnauthorized:false}:
    false,
    


    synchronize:false,
    logging:true,
    entities:process.env.NODE_END==="production"?["dist/entities/*.js"]:["src/entities/*.ts"],
    migrations:process.env.NODE_END==="production"?["dist/migrations/*.js"]:["src/migrations/*.ts"]

})


AppDataSource.initialize().then(()=>{
    console.log("DataSource inicialized")
}).catch((err)=>console.log("Error Data Source",err))