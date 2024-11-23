//Es un middleware que hace validacion de login con google.

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; //Strategy as GoogleStrategy: para cambiarle el nombre a las variables
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export default passport.use(
    new GoogleStrategy(  //3 Datos
        {
            clientID: process.env.GOOGLE_CLIENT_ID,             //Id del cliente que nos da googleCloud
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,     //El secreto del cliente que nos da googleCloud
            callbackURL: process.env.GOOGLE_URI_BACK            //La URL de respuesta de google a la API
        },
        async (accesToken, refreshToken, profile, done) => {
            console.log(profile);

            try {
                //Buscar si el usuario esta en la base de datos
                let user = await User.findOne({ email: profile.emails[0].value })
                if (!user) {

                    const hashedPassword = bcryptjs.hashSync(
                        profile.id,
                        10
                    );                    //Si el usuario no existe, creo uno nuevo.
                    user = new User({
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: hashedPassword,
                        photo: profile.photos[0].value,
                        country: null,
                        online: false,
                    })
                    await user.save()
                }
                return done(null, user)

            } catch (error) {
                return done(error, null)
            }
        }
    )
)