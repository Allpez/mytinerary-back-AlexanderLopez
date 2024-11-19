//Se usa el middleware para verificar si la cuenta no existe al momento de iniciar sesion.
import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        if (account) {             //Si el email existe entonces guardará la informacion que queramos en un ojeto.
            req.user = {
                email: account.email,
                password: account.password,
                name: account.name,
                phone: account.phone
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist"
        })

    } catch (error) {
        next(error)
    }
}