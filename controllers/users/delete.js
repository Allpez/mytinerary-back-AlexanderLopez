import User from "../../models/User.js"

let deleteOne = async (req, res, next) => {
    try {
        let deleteUser = await User.deleteOne({ //El metodo que utilizamos para eliminar 1
            firstname: req.body.firstname //Condiciones para buscar el que compla la condicion y eliminarlo
            // Este método busca el primer documento que cumple ciertas condiciones y lo elimina. Devuelve una propiedad deletedCount con la cantidad de documentos eliminados (aunque en este caso sea solo uno).
        })
        return res.status(200).json({
            response: deleteUser
        })
    } catch (error) {
        next(error)
    }
}

const deleteManyUsers = {
    destroy: async (req, res, next) => {
        try {
            // Elimina todos los documentos que coincidan con el `admin_id` proporcionado
            let destroyed = await User.deleteMany(
                { firstname: req.body.firstname } // Condiciones para la búsqueda y eliminación
            )
            return res.status(200).json({ response: destroyed }) // Retorna la respuesta con `deletedCount`
        } catch (error) {
            next(error)
        }
    }
}


export { deleteOne, deleteManyUsers }
