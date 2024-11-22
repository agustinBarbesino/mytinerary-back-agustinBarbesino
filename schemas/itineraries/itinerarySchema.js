import joi from "joi-oid"

const itinerarySchema = joi.object({
    userName: joi.string().required()
    .min(3)
    .max(20)
    .message({
        "any.required": "User name is required",
        "string.empty": "User name is required",
        "string.min": "User name must be at least 3 characters long",
        "string.max": "User name must be at most 20 characters long"
    }),
    userImg: joi.string().required()
    .message({
        "any.required": "User image is required",
        "string.empty": "User image is required"
    }),
    price: joi.number().required()
    .message({
        "any.required": "Price is required",
        "string.empty": "Price is required"
    }),
    duration: joi.number().required()
    .message({
        "any.required": "Duration is required",
        "string.empty": "Duration is required"
    }),
    city: joi.string().required().oid()
    .message({
        "any.required": "City is required",
        "string.empty": "City is required",
        "string.oid": "City is required"
    })
})

export default itinerarySchema