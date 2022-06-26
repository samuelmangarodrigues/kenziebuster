import { DataSource } from "typeorm"
import dotenv from "dotenv"
import path from "path"
dotenv.config()


export const AppDataSource = new DataSource({
    type:"postgres",
    url: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV==="production"?{ rejectUnauthorized: false }: false,
    
    


    synchronize:false,
    logging:true,
    entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
    migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],

})


AppDataSource.initialize().then(()=>{
    console.log("DataSource inicialized")
}).catch((err)=>console.log("Error Data Source",err))