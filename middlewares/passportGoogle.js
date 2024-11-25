import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; 
import User from "../models/User.js";
import bcryptjs from "bcryptjs";

export default passport.use(
    new GoogleStrategy(  
        {
            clientID: process.env.GOOGLE_CLIENT_ID,             
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,     
            callbackURL: process.env.GOOGLE_URI_BACK            
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Verifica si el usuario ya existe en la base de datos
                let user = await User.findOne({ email: profile.emails[0].value });
                
                if (!user) {
                    // Si no existe, crea un nuevo usuario con los datos de Google
                    const hashedPassword = bcryptjs.hashSync(
                        profile.id, // Usamos el ID de Google como una "contraseña", aunque no se usa para autenticar.
                        10
                    );
                    
                    user = new User({
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: hashedPassword, // Usado solo para fines de seguridad.
                        photo: profile.photos ? profile.photos[0].value : null,
                        country: null,
                        online: false,
                    });
                    
                    await user.save(); // Guarda al nuevo usuario en la base de datos
                }
                return done(null, user); // Devuelve el usuario autenticado

            } catch (error) {
                return done(error, null); // Si ocurre un error, pasa al siguiente middleware
            }
        }
    )
);






// //Es un middleware que hace validacion de login con google.

// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20"; //Strategy as GoogleStrategy: para cambiarle el nombre a las variables
// import User from "../models/User.js";
// import bcryptjs from "bcryptjs";

// export default passport.use(
//     new GoogleStrategy(  //3 Datos
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,             //Id del cliente que nos da googleCloud
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,     //El secreto del cliente que nos da googleCloud
//             callbackURL: process.env.GOOGLE_URI_BACK            //La URL de respuesta de google a la API
//         },
//         async (accesToken, refreshToken, profile, done) => {
//             console.log(profile);

//             try {
//                 //Buscar si el usuario esta en la base de datos
//                 let user = await User.findOne({ email: profile.emails[0].value })
//                 if (!user) {

//                     const hashedPassword = bcryptjs.hashSync(
//                         profile.id,
//                         10
//                     );                    //Si el usuario no existe, creo uno nuevo.
//                     user = new User({
//                         firstname: profile.name.givenName,
//                         lastname: profile.name.familyName,
//                         email: profile.emails[0].value,
//                         password: hashedPassword,
//                         photo: profile.photos[0].value,
//                         country: null,
//                         online: false,
//                     })
//                     await user.save()
//                 }
//                 return done(null, user)//Envia: El error / lo que enviara en el request 

//             } catch (error) {
//                 return done(error, null)
//             }
//         }
//     )
// )