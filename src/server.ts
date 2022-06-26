import app from "./app";
import {AppDataSource} from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Database Connected!");

    app.listen(process.env.PORT || 3000)
    
  })
  .catch((err) => console.error(err));