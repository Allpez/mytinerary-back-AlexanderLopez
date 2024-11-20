//Enrutador principal

import { Router } from "express";
import usersRouter from "./users.js";          //Importamos el enrutador de Usuarios
import citiesRouter from "./cities.js" //Importamos el enrutador de ciudades.
import itinerariesRouter from "./itineraries.js" //Importamos el enrutador de ciudades.
import authRouter from "./auth.js"            //Importamos el enrutador de Inicio de sesion

const router = Router() //Para usar el router lo guardamos en una variable.

router.use('/cities',citiesRouter)                  //Solicitud que nos redirije a la ruta  de cities.
router.use('/itineraries',itinerariesRouter)
router.use('/users', usersRouter);              //Solicitud que nos redirije a la ruta de Usuarios.
router.use('/auth',authRouter)

export default router