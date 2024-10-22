import City from "../../models/City.js";

let create = async (req, res, next) => {
    try {
        let city = req.body;

        let newCity = await City.create(city);
        return res.status(201).json({
            response: newCity,
        });
    } catch (error) {
        next(error); 
    }
};

let insertMany = async (req, res, next) => {
    try {
        let cities = req.body;

        let newCities = await City.insertMany(cities);
        return res.status(201).json({
            response: newCities,
        });
    } catch (error) {
        next(error);
    }
};

export { create, insertMany };
