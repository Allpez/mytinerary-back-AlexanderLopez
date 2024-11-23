import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signUp from "../controllers/auth/signUp.js"; 
import signOut from "../controllers/auth/signOut.js";
import signInGoogle from "../controllers/auth/signInGoogle.js";

//Middlewares
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";

const routerAuth = Router()

// Ruta para el inicio de sesión
routerAuth.post('/signIn', accountNoExist, isValidPassword, generateToken, signIn)

// Ruta para cerrar sesión
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut)

// Ruta para registrar un nuevo usuario
routerAuth.post('/signUp', accountNoExist, signUp);


//Ruta para iniciar sesion con Google.
routerAuth.get(                                                                             //Ruta de salida hacia google para el inicio de sesion
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })  //peticion de get porque redireccionamos a google
)
routerAuth.get(                                                                             //Ruta de retorno a la aplicación
    '/signIn/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }),
    generateToken,
    signInGoogle
)

export default routerAuth