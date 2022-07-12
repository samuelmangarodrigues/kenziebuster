export interface IUser{
    email:string
    name:string
    password:string
    isAdm:boolean
}
export interface IUserGet{
    name:string
    email:string
    isAdm:boolean
}
export interface IUserListOne{
    authorization?:string
}
export interface IStatusLogin{
    status:number
    message:object
}
export interface ILogin{
    email:string
    password:string
}
