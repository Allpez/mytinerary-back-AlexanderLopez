import joi from "joi-oid"; //Extension de joi que añade un tipo de objectId

const schema = joi.object({     // Creamos el schema que vamos a validar, es un objeto de joi.
    _id: joi.objectId().messages({
        'any.required': 'El ID es requerido',
        'string.pattern.name': 'El ID debe ser un ObjectId válido'
    }),
    firstname: joi.string()
        .pattern(/^[a-zA-Z\s]+$/)
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'El nombre solo puede contener letras y espacios.',
            'string.min': 'El nombre debe tener al menos 3 caracteres.',
            'string.max': 'El nombre debe tener un máximo de 16 caracteres.',
            'string.empty': 'El campo "firstname" no puede estar vacío.',
            'any.required': 'El campo "firstname" es obligatorio.'
        }),
    lastname: joi.string()
        .pattern(/^[a-zA-Z\s]+$/)
        .min(3)
        .max(16)
        .messages({
            'string.pattern.base': 'El apellido solo puede contener letras y espacios.',
            'string.min': 'El apellido debe tener al menos 3 caracteres.',
            'string.max': 'El apellido debe tener un máximo de 16 caracteres.',
            'string.empty': 'El campo "lastname" no puede estar vacío.',
            'any.required': 'El campo "lastname" es obligatorio.'
        }),
    email: joi.string()
        .required()
        .email({ tlds: { allow: false } })
        .messages({
            'string.email': 'Debe ser un correo electrónico válido.',
            'string.empty': 'El campo "email" no puede estar vacío.',
            'any.required': 'El campo "email" es obligatorio.'
        }),
    password: joi.string()
        .min(8)
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .messages({
            'string.min': 'La contraseña debe tener al menos 8 caracteres.',
            'string.pattern.base': 'La contraseña debe incluir al menos una letra, un número y un carácter especial.',
            'string.empty': 'El campo "password" no puede estar vacío.',
            'any.required': 'El campo "password" es obligatorio.'
        }),
    photo: joi.string()
        .uri()
        .messages({
            'string.uri': 'El campo "photo" debe ser una URL válida.',
            'string.empty': 'El campo "photo" no puede estar vacío.',
            'any.required': 'El campo "photo" es obligatorio.'
        }),
    country: joi.string()
        .optional()
        .messages({
            'string.empty': 'El campo "country" no puede estar vacío.'
        }),
    online: joi.boolean()
        .optional()
        .messages({
            'boolean.base': 'El campo "online" debe ser un valor booleano (true o false).'
        })
});

export default schema;

