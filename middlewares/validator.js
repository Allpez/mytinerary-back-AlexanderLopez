// Validacion de schemas

const validator = (schema) => [     //Se va a llenar el arreglo con la respuesta del middleware (los errores).
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false }) //Va a validar el body que venga en el esquema y validara todo.
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        return next()
    }
]

export default validator