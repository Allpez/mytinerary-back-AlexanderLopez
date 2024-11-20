import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNoExist from "../middlewares/accountNoExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import googleLogin from "../middlewares/googleLogin.js";
import googleRegister from "../middlewares/googleRegister.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const routerAuth = Router();

routerAuth.post('/signIn', accountNoExist, isValidPassword, generateToken, signIn);
routerAuth.post('/signOut', passport.authenticate('jwt', { session: false }), signOut);

// Ruta de login con Google
routerAuth.get('/signIn/google', googleLogin);
routerAuth.get('/signIn/google/callback', googleLogin, generateToken, signIn);

// Ruta de registro con Google
routerAuth.get('/signUp/google', googleRegister);
routerAuth.get('/signUp/google/callback', googleRegister, generateToken, createHash, signIn);

export default routerAuth;
