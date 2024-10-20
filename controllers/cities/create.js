// Carpeta para crear nueva informacion. Nueva ciudad

import City from "../../models/City.js" // Importamos el modelo de la ciudad.

let create = async (req, res, next) => {
    try {
        let city = req.body;

        const Properties = ['name', 'photo', 'country', 'continent','description','isVisaRequired', 'currency', 'language', 'averageHotelCost','averageTemperature'];
        const missingFields = Properties.filter(field => city[field] === undefined || city[field] === null);

        if (missingFields.length > 0) {
            return res.status(400).json({ 
                error: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

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

        if (!Array.isArray(cities) || cities.length === 0) {
            return res.status(400).json({ error: "You must provide an array of employees." });
        }

        const requiredFields = ['name', 'photo', 'country', 'continent','description','isVisaRequired', 'currency', 'language', 'averageHotelCost','averageTemperature'];
        const invalidCities = cities.filter(city => 
            requiredFields.some(field => city[field] === undefined || city[field] === null)
        );
        
        if (invalidCities.length > 0) {
            return res.status(400).json({
                error: `Some employees are missing required fields.`,
                invalidCities
            });
        }

        let newCities = await City.insertMany(cities);
        return res.status(201).json({
            response: newCities,
        });
    } catch (error) {
        next(error);
    }
};


export { create, insertMany };
