import Itinerary from "../../models/Itinerary.js"

const update = async (req, res, next) => { //Reciubimos los 3 parametros basicos
    try {
        let itinerary = req.body
        await Itinerary.updateOne( //Este método busca el primer documento que cumple ciertas condiciones y lo modifica. Por defecto, no devuelve el documento modificado.
            //Recibe 2 objetos
            { _id: itinerary._id }, //condiciones de busqueda una o varias. (ej: _id: itinerary._id, name: itinerary.name)
            { likes: itinerary.likes, duration: itinerary.duration } //modificaciones
        )
        return res.status(200).json({
            responde: itinerary
        })

    } catch (error) {
        next(error)
    }
}

export default update
