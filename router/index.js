//Enrutador principal

import { Router } from "express";
import citiesRouter from "./cities.js" //Importamos el enrutador de ciudades.
import itinerariesRouter from "./itineraries.js" //Importamos el enrutador de ciudades.

const router = Router() //Para usar el router lo guardamos en una variable.

router.use('/cities',citiesRouter) //Solicitud que nos redirije a la ruta  de cities.
router.use('/itineraries',itinerariesRouter)

export default router