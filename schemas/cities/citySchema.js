import joi from "joi"

const citySchema = joi.object({
    name: joi.string().required()
    .messages({
        "any.required": "City name is required",
        "string.empty": "City name is required"
    }),
    img: joi.string().required()
    .messages({
        "any.required": "City image is required",
        "string.empty": "City image is required"
    }),
    country: joi.string().required()
    .messages({
        "any.required": "City country is required",
        "string.empty": "City country is required"
    }),
    continent: joi.string().required()
    .messages({
        "any.required": "City continent is required",
        "string.empty": "City continent is required"
    }),
    description: joi.string().required()
    .messages({
        "any.required": "City description is required",
        "string.empty": "City description is required"
    }),
    currency: joi.string().required()
    .messages({
        "any.required": "City currency is required",
        "string.empty": "City currency is required"
    }),
})

export default citySchema