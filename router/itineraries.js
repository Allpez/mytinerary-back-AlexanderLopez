import { Router } from "express";
import { allItineraries, itinerariesByCity, itinerariesByID } from "../controllers/itineraries/read.js"
import create from "../controllers/itineraries/create.js"
import update from "../controllers/itineraries/update.js"
import deleteOne from "../controllers/itineraries/delete.js"

const router = Router()  //Para usar el router lo guardamos en una variable.

//Creamos los enrutadores especificos.
router.get('/all',allItineraries) //Enrutador paramostrar todos los "itinerarios"
router.get('/city/:name',itinerariesByCity) //Enrutador para filtrar por "Ciudades"
router.get('/id/:id',itinerariesByID) //Enrutador para filtrar por "Id"
router.post('/create',create) //Creamos un enrutador para crear un itinerario en la data
router.put('/update', update)  //Creamos un enrutador para actualizar un elementos en la data
router.delete('/deleteOne', deleteOne) //Creamos un enrutador para eliminar un elemento de la data

export default router