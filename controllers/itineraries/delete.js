import Itinerary from "../../models/Itinerary.js"

let deleteOne = async (req, res, next) => {
    try {
        let deleteItinerary = await Itinerary.deleteOne({ //El metodo que utilizamos para eliminar 1
            name: req.body.name //Condiciones para buscar el que compla la condicion y eliminarlo
            // Este método busca el primer documento que cumple ciertas condiciones y lo elimina. Devuelve una propiedad deletedCount con la cantidad de documentos eliminados (aunque en este caso sea solo uno).
        })
        return res.status(200).json({
            response: deleteItinerary
        })
    } catch (error) {
        next(error)
    }
}

export default deleteOne
