import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let city = await City.find();
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let citiesByID = async (req, res, next) => {
    try {
        let idQuery = req.params.id;
        let city = await City.findById(idQuery);
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let citiesByName = async (req, res, next) => {
    try {
        let nameQuery = req.params.name;
        let city = await City.find({ name: nameQuery });
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let citiesByContinent = async (req, res, next) => {
    try {
        let continentQuery = req.params.continent;
        let city = await City.find({ continent: continentQuery });
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let citiesByLanguage = async (req, res, next) => {
    try {
        let languageQuery = req.params.language;
        let city = await City.find({ language: languageQuery });
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

let citiesByVisa = async (req, res, next) => {
    try {
        let visaQuery = req.params.visa;
        let city = await City.find({ isVisaRequired: visaQuery });
        return res.status(200).json({
            response: city
        });
    } catch (error) {
        next(error);
    }
};

export { allCities, citiesByID, citiesByName, citiesByContinent, citiesByLanguage, citiesByVisa };
