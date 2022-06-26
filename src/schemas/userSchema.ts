import * as yup from "yup"



const createUserSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required().lowercase(),
    password:yup.string().required(),
    isAdm:yup.bool().default(false).optional()
})

const serializedCreateUserSchema=yup.object().shape({
    userUuid:yup.string().uuid().required(),
    name:yup.string().required(),
    email:yup.string().email().required().lowercase(),
    isAdm:yup.bool().required()
})


const loginSchema=yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required()
})

export default loginSchema

export {createUserSchema,serializedCreateUserSchema,loginSchema}