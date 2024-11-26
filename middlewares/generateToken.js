//Se usa el middleware para generar un token por medio del encriptado del correo
import jwt from "jsonwebtoken"; 
import "dotenv/config.js"

export default (req, res, next) => {
    const token = jwt.sign( //Recibe 3 parametros, 
        { email: req.body.email || req.user.email },  //1er dato: Objeto. que informacion del usuario vamos a encriptar?
        process.env.SECRET, //2do dato: El secreto, que es un codigo alfanumerica que se guarda en .env (es una llave)
        {expiresIn: 60*60*24} //3er dato: Tiempo que va a ser valido el token. seg*min*dia*sem
    )
    req.token = token
    return next( )
}