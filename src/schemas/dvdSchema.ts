import * as yup from "yup"



const createDvdSchema = yup.object().shape({
    name:yup.string().required(),
    duration:yup.string().required(),
    price:yup.number().required(),
    quantity:yup.number().required()
})


const serializedDvdSchema = yup.object().shape({
    name:yup.string().required(),
    duration:yup.string().required(),
    stock:yup.object().shape({
        price:yup.number().required(),
        quantity:yup.number().required(),
        stockUuid:yup.string().required()
    }),
    dvdUuid:yup.string().required()
})

export {createDvdSchema,serializedDvdSchema}