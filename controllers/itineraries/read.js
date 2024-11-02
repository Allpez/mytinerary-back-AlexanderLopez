//Importamos los modelos de Itinerary y City
import Itinerary from "../../models/Itinerary.js"
import City from "../../models/City.js";

// import mongoose from 'mongoose'
import "../../models/City.js" //Importamos el modelo para usarlo en la variable store

let allItineraries = async (req, res, next) => {
    try {
        //Parametros
        let { name } = req.query
        let query = {} //Enviamos un objeto vacio, Traer todas las ciudades

        if (name) {
            query.name = { $regex: '^' + name + '.*', $options: 'i' }//Prevalidaciones
        }

        ///Para hacer la consulta
        //Populate nos permite buscar un campo especifico y traer la informacion relacionada. Ejecutar.
        //si se deja el segundo parametro de populate vacio ('') entoces traera todas las propiedades asociadas 
        let itinerary = await Itinerary.find(query).populate('city', '_id').exec() //Relaciones entre documentos en mongo
        return res.status(200).json({
            response: itinerary
        })
    } catch (error) {
        next(error)
    }
}

let itinerariesByCity = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;

        // Encuentra la ciudad por su nombre para obtener su ID
        let city = await City.findOne({ name: nameQuery });
        
        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        // Usa el ID de la ciudad para buscar itinerarios relacionados
        let itineraries = await Itinerary.find({ city: city._id });
        
        if (itineraries.length === 0) {
            return res.status(404).json({ message: "No itineraries found for this city" });
        }

        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};

let itinerariesByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let itineraries = await Itinerary.findById(idQuery);
        return res.status(200).json({
            response: itineraries
        });
    } catch (error) {
        next(error);
    }
};



export { allItineraries, itinerariesByCity, itinerariesByID }