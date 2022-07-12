import * as yup from "yup"



const userCreateSchema = yup.object().shape({
  email: yup.string().email().lowercase().required(),
  name: yup.string().required(),
  isAdm: yup.boolean().default(false).optional(),
  password: yup.string().required(),
});

const userCreateSerializedSchema = yup.object().shape({
  isAdm: yup.boolean().required(),
  name: yup.string().required(),
  email: yup.string().email().required(),
  userUuid: yup.string().uuid().required(),
});


const loginSchema=yup.object().shape({
    email:yup.string().email().required(),
    password:yup.string().required()
})



export {userCreateSchema,userCreateSerializedSchema,loginSchema}