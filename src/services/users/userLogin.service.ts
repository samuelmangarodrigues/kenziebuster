import { JsonWebTokenError, sign } from "jsonwebtoken";
import { Request,Response } from "express"
import { IStatusLogin } from "../../interfaces/User"
import userRepositorie from "../../repositories/users"
import { User } from "../../entities/user.entitie";
const userLoginService = async({validated}:Request):Promise<IStatusLogin>=>{
    const foundUser:User | null = await userRepositorie.retrieve({
        email:validated.email
    })
    if(!foundUser){
        return {status : 401 , message:{message:"Invalid Credencials"}}
    }
    
    if(!(await foundUser.comparePwd(validated.password))){
        return {status:401,message:{message:"Invalid Credentials"}}
    }

    const token = sign({name:foundUser.name,email:foundUser.email,password:foundUser.password,isAdm:foundUser.isAdm,userUuid:foundUser.userUuid,cart:foundUser.cart}, process.env.SECRET_KEY as string, {
        expiresIn: process.env.EXPIRES_IN,
      });
      console.log(foundUser.cart)
      return { status: 200, message: { token }};
}
export default userLoginService