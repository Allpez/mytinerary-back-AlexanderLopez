// Validacion para comparar la contraseña enviada en el body contra la que esta en la base de datos.

import bcryptjs from "bcryptjs"

export default (req, res, next) => {
    let passwordBody = req.body.password
    let passwordDB = req.user.password

    let compare = bcryptjs.compareSync( //Recibe 2 parametros y comparar
        passwordBody,                   //La contraseña que tiene que hashear.
        passwordDB                      //Contra que, va a comparar la contaseña.
    )
    if (compare) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
    })
}