import * as yup from "yup"





const cartSchema = yup.object().shape({
    cartUuid:yup.string().required(),
    paid:yup.boolean().required(),
    total:yup.number().required(),
    dvd:yup.object().shape({
        dvdUuid:yup.string().required(),
        name:yup.string().required(),
        duration:yup.string().required()
    }).required(),

})

const serializedCartSchema=yup.object().shape({
    total:yup.number().required(),
    paid:yup.boolean().required(),
    user: yup.object().shape({
        name:yup.string().required(),
        email:yup.string().required(),
        isAdm:yup.boolean().required(),
        userUuid:yup.string().required()
    }).required(),
    dvd:yup.object().shape({
        dvdUuid:yup.string().required(),
		name:yup.string().required(),
		duration:yup.string().required(),
        stock:yup.object().shape({
            stockUuid:yup.string().required(),
			quantity:yup.number().required() ,
			price:yup.number().required()
        })
    })
}) 
export {serializedCartSchema,cartSchema}