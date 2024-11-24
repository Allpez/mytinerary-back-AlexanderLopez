import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(                //Recibe 2 objetos.
            { email: req.user.email },              //Como lo va a buscar.
            { online: true }                        //Cambia la sig. propiedad.
        )
        return res.redirect('http://localhost:5173/home?token=' + req.token)

    } catch (error) {
        next(error)
    }
}