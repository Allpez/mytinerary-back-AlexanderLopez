import joi from "joi-oid"; // Extensión de Joi para ObjectId

const schema = joi.object({
    name: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.base': 'El campo "name" debe ser un texto.',
            'string.empty': 'El campo "name" no puede estar vacío.',
            'string.min': 'El nombre debe tener al menos 3 caracteres.',
            'string.max': 'El nombre debe tener un máximo de 50 caracteres.',
            'any.required': 'El campo "name" es obligatorio.'
        }),
    photo: joi.string()
        .uri()
        .required()
        .messages({
            'string.uri': 'El campo "photo" debe ser una URL válida.',
            'string.empty': 'El campo "photo" no puede estar vacío.',
            'any.required': 'El campo "photo" es obligatorio.'
        }),
    country: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.base': 'El campo "country" debe ser un texto.',
            'string.empty': 'El campo "country" no puede estar vacío.',
            'string.min': 'El nombre del país debe tener al menos 3 caracteres.',
            'string.max': 'El nombre del país debe tener un máximo de 50 caracteres.',
            'any.required': 'El campo "country" es obligatorio.'
        }),
    continent: joi.string()
        .valid('Asia', 'Africa', 'North America', 'South America', 'Antarctica', 'Europe', 'Australia')
        .required()
        .messages({
            'any.only': 'El campo "continent" debe ser un continente válido.',
            'string.empty': 'El campo "continent" no puede estar vacío.',
            'any.required': 'El campo "continent" es obligatorio.'
        }),
    description: joi.string()
        .min(10)
        .max(300)
        .required()
        .messages({
            'string.base': 'El campo "description" debe ser un texto.',
            'string.empty': 'El campo "description" no puede estar vacío.',
            'string.min': 'La descripción debe tener al menos 10 caracteres.',
            'string.max': 'La descripción debe tener un máximo de 300 caracteres.',
            'any.required': 'El campo "description" es obligatorio.'
        }),
    isVisaRequired: joi.boolean()
        .required()
        .messages({
            'boolean.base': 'El campo "isVisaRequired" debe ser un valor booleano.',
            'any.required': 'El campo "isVisaRequired" es obligatorio.'
        }),
    currency: joi.string()
        .required()
        .min(3)
        .max(20)
        .messages({
            'string.base': 'El campo "currency" debe ser un texto.',
            'string.empty': 'El campo "currency" no puede estar vacío.',
            'string.min': 'El campo "currency" debe tener al menos 3 caracteres.',
            'string.max': 'El campo "currency" debe tener un máximo de 20 caracteres.',
            'any.required': 'El campo "currency" es obligatorio.'
        }),
    language: joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.base': 'El campo "language" debe ser un texto.',
            'string.empty': 'El campo "language" no puede estar vacío.',
            'string.min': 'El idioma debe tener al menos 3 caracteres.',
            'string.max': 'El idioma debe tener un máximo de 50 caracteres.',
            'any.required': 'El campo "language" es obligatorio.'
        }),
    averageHotelCost: joi.number()
        .positive()
        .required()
        .messages({
            'number.base': 'El campo "averageHotelCost" debe ser un número.',
            'number.positive': 'El campo "averageHotelCost" debe ser un número positivo.',
            'any.required': 'El campo "averageHotelCost" es obligatorio.'
        }),
    averageTemperature: joi.number()
        .required()
        .messages({
            'number.base': 'El campo "averageTemperature" debe ser un número.',
            'any.required': 'El campo "averageTemperature" es obligatorio.'
        })
});

export default schema;
