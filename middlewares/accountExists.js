//Se usa el middleware para verificar si la cuenta ya existe al momento de hacer el registro
import User from "../models/User.js";

export default async (req, res, next) => {   //Funcion asincrona porque debe conectarse a la base de datos
    try {
        let account = await User.findOne({
            email: req.body.email
        })
        if (account) {
            return res.status(400).json({
                succes: false,
                messages: 'User already esxists'
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}