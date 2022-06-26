import { Request } from "express";
import userRepository from "../../repositories/users"

  const userDeleteUserService = async ({params}:Request)=> {
    const {id} =params

    await userRepository.delete(id);


    return {}

  };


  export default userDeleteUserService