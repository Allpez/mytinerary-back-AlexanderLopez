import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        // Actualiza el estado 'online' del usuario
        await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true }
        );

        // Redirige a la aplicación cliente pasando el token generado
        return res.redirect('http://localhost:5173/home?token=' + req.token); // Aquí rediriges a la app con el token
    } catch (error) {
        next(error); // Si ocurre un error, pasa al siguiente middleware
    }
};







// import User from "../../models/User.js";

// export default async (req, res, next) => {
//     try {
//         await User.findOneAndUpdate(                //Recibe 2 objetos.
//             { email: req.user.email },              //Como lo va a buscar.
//             { online: true }                        //Cambia la sig. propiedad.
//         )
//         return res.redirect('http://localhost:5173/home?token=' + req.token)

//     } catch (error) {
//         next(error)
//     }
// }