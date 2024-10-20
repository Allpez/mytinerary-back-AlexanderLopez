import { Router } from "express";
import { allCities,citiesByID,citiesByName,citiesByContinent,citiesByLanguage,citiesByVisa} from "../controllers/cities/read.js"
import { create,insertMany } from "../controllers/cities/create.js"

const router = Router()  //Para usar el router lo guardamos en una variable.

//Creamos los enrutadores especificos.
router.get('/all',allCities) //Enrutador para filtrar por "Ciudades"
router.get('/id/:id',citiesByID) //Enrutador para filtrar por "ID"
router.get('/name/:name',citiesByName) //Enrutador para filtrar por "Nombre de Ciudad"
router.get('/continent/:continent',citiesByContinent) //Enrutador para filtrar por "Continente"
router.get('/language/:language',citiesByLanguage) //Enrutador para filtrar por "Idioma"
router.get('/visa/:visa',citiesByVisa) //Enrutador para filtrar por "Requiere visa"
router.post('/create',create) //Enrutador para "Crear ciudad"
router.post('/insertmany',insertMany) //Enrutador para "Crear ciudades"

export default router