//Middleware que se va a encargar de desencriptar el token y validar el correo

import User from "../models/User.js";      //Traemos el modelo para preguntarle a la base de datos
import passport from "passport";        //Passport va a desencriptar el token
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(            //Funcion de la libreria passport que se va a encargar de desencriptar.
    new Strategy(                       //Nueva estrategia, cual va a ser el orden y la forma de desencriptar.
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Extrae el token del header y aplica el bearer token
            secretOrKey: process.env.SECRET                           //Clave de como lo va a desencriptar.
        },
        async (jwt_payload, done) => {      //La funcion recibe el token desencriptado y done para pasar al sig con informacion
            try {
                let user = await User.findOne({ email: jwt_payload.email })

                if (user) {
                    return done(null, user) //Recibe: Si hubo un error? y los datos del usuario autenticado.
                } else {
                    return done(null, null) //Si no lo encuentra se hacemos un return para que salga, null si no hay error y null si no hay informacion
                }
            } catch (error) {
                return done(error, null)
            }
        }
    )
)