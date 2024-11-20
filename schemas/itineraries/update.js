import joi from "joi-oid"; // Extensión de Joi que añade un tipo de ObjectId

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'any.required': 'El ID es requerido',
        'string.pattern.name': 'El ID debe ser un ObjectId válido'
    }),
    name: joi.string()
        .pattern(/^[a-zA-Z\s]+$/)
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'El nombre solo puede contener letras y espacios.',
            'string.min': 'El nombre debe tener al menos 3 caracteres.',
            'string.max': 'El nombre debe tener un máximo de 16 caracteres.',
            'string.empty': 'El campo "name" no puede estar vacío.',
            'any.required': 'El campo "name" es obligatorio.'
        }),
    photo: joi.string()
        .uri()
        .messages({
            'string.uri': 'El campo "photo" debe ser una URL válida.',
            'string.empty': 'El campo "photo" no puede estar vacío.',
            'any.required': 'El campo "photo" es obligatorio.'
        }),
    duration: joi.number()
        .positive()
        .messages({
            'number.base': 'El campo "duration" debe ser un número.',
            'number.positive': 'La duración debe ser un número positivo.',
            'any.required': 'El campo "duration" es obligatorio.'
        }),
    likes: joi.number()
        .integer()
        .min(0)
        .messages({
            'number.base': 'El campo "likes" debe ser un número.',
            'number.integer': 'El campo "likes" debe ser un número entero.',
            'number.min': 'El campo "likes" no puede ser menor que 0.',
            'any.required': 'El campo "likes" es obligatorio.'
        }),
    hashtags: joi.string()
        .pattern(/^#\w+$/) // Valida hashtags que empiecen con #
        .messages({
            'string.pattern.base': 'Cada hashtag debe comenzar con "#" seguido de letras, números o guiones bajos.',
            'string.empty': 'El campo "hashtags" no puede estar vacío.',
            'any.required': 'El campo "hashtags" es obligatorio.'
        }),
    cityId: joi.objectId()
        .messages({
            'any.required': 'El ID de la ciudad es obligatorio.',
            'string.pattern.name': 'El ID de la ciudad debe ser un ObjectId válido.'
        })
});


export default schema;
