import User from "../../models/User.js"

let allUser = async (req, res, next) => {
    try {
        let {name} = req.query 
        let query = {} //Enviamos un objeto vacio, para traer a todos los usuarios

        if (name){
            query.name = {$regex: name, $options: 'i'} //Prevalidaciones
        }
        
        let user = await User.find(query);
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let user = await User.findById(idQuery);
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

let usersByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let user = await User.find({ name: nameQuery });
        return res.status(200).json({
            response: user
        });
    } catch (error) {
        next(error);
    }
};

export { allUser, usersByID, usersByName }