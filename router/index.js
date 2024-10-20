//Enrutador principal

import { Router } from "express";
import citiesRouter from "./cities.js" //Importamos el enrutador de ciudades.

const router = Router() //Para usar el router lo guardamos en una variable.

router.use('/cities',citiesRouter) //Para que al hacer la solicitud nos redirija a esta ruta.

export default router