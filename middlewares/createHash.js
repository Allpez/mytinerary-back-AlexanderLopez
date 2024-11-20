//Se usa el middleware para generar un hash a partir de la contraseña del usuario y darle un nivel de seguridad.
import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    let password = req.body.password
    let hashPassword = bcryptjs.hashSync(    //Recibe 2 parametros. Que voy a hashear y el nivel de seguridad.
        password,
        10
    )
    req.body.password = hashPassword
    return next() 
}