import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(        //Recibe 2 objetos.
            { email: req.body.email ||req.user.email },      //Como lo va a buscar.
            { online: true }                //Cambia la sig. propiedad.
        )
        // console.log(req);

        return res.status(200).json({
            succes: true,
            message: "signed In",
            user: {
                firstname: req.user.firstname,
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