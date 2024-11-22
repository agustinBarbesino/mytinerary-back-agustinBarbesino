import joi from "joi";

const userSchema = joi.object({
    name: joi.string().required()
        .min(3)
        .max(30)
        .messages({
        'any.required': 'NAME REQUIRED, please enter a name',
        'string.empty': 'NAME REQUIRED, please enter a name',
        'string.min': 'NAME TOO SHORT, minimum 3 characters',
        'string.max': 'NAME TOO LARGE, maximum 30 characters',
    }),
    lastName: joi.string().required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'LAST NAME REQUIRED, please enter a last name',
            'string.empty': 'LAST NAME REQUIRED, please enter a last name',
            'string.min': 'LAST NAME TOO SHORT, minimum 3 characters',
            'string.max': 'LAST NAME TOO LARGE, maximum 30 characters',
        }),
    email: joi.string().email().required()
        .email({ minDomainSegments: 2 })
        .messages({
            'any.required': 'MAIL REQUIRED, please enter a mail',
            'string.empty': 'MAIL REQUIRED, please enter a mail',
            'string.email': 'INVALID MAIL, please enter a valid mail',
        }),
    password: joi.string().required()
        .alphanum()
        .min(8)
        .max(30)
        .messages({
            'any.required': 'PASSWORD REQUIRED, please enter a password',
            'string.empty': 'PASSWORD REQUIRED, please enter a password',
            'string.min': 'PASSWORD TOO SHORT, minimum 8 characters',
            'string.max': 'PASSWORD TOO LARGE, maximum 30 characters',
        }),
    img: joi.string().required()
        .messages({
            'any.required': 'IMAGE REQUIRED, please enter an image URL',
            'string.empty': 'IMAGE REQUIRED, please enter an image URL'
        }),
    country: joi.string().required()
        .messages({
            'any.required': 'COUNTRY REQUIRED, please enter a country',
            'string.empty': 'COUNTRY REQUIRED, please enter a country',
        }),
})

export default userSchema
