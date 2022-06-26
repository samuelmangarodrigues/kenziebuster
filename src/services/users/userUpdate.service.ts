import { User } from "../../entities/user.entite";
import userRepository from "../../repositories/users";
import { Request } from "express";



const userUpdateService = async ({
    params,
    body,
  }: Request): Promise<Partial<User>> => {
    const {id}= params

    await userRepository.updated(id, body as Partial<User>);
    
    const user = await userRepository.retrieve({userUuid:id}) as User

    

    return user
  };

  export default userUpdateService