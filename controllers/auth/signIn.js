import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate( //Recibe 2 objetos, 1.- Como lo va a buscar, 2-. cambia la sig. propiedad.
            { email: req.body.email },
            { online: true }
        )
        console.log(req);
        
        return res.status(200).json({
            succes: true,
            message: "signed In",
            user: {
                name: req.user.name,
                lastname: req.user.lastname,
                email: req.user.email,
                password: req.user.password,
                photo: req.user.photo,
                country: req.user.country
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}