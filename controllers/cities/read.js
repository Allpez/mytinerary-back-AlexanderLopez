import City from "../../models/City.js";
import mongoose from 'mongoose'

let allCities = async (req, res) => {
    try {
        let city = await City.find()
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let citiesByID = async (req, res) => {
    try {
        let idQuery = req.params.id;
        if (!idQuery) {
            return res.status(400).json({ message: 'Id query parameter is required' });
        }
        if (!mongoose.Types.ObjectId.isValid(idQuery)) {
            return res.status(400).json({ message: 'Id not Found' });
        }
        let city = await City.findById(idQuery);
        if (!city) {
            return res.status(400).json({ message: 'Id not Found' });
        }
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let citiesByName = async (req, res) => {
    try {
        let idQuery = req.params.name;
        let city = await City.find({name:idQuery})
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let citiesByContinent = async (req, res) => {
    try {
        let idQuery = req.params.continent;
        let city = await City.find({continent:idQuery})
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let citiesByLanguage = async (req, res) => {
    try {
        let idQuery = req.params.language;
        let city = await City.find({language:idQuery})
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

let citiesByVisa = async (req, res) => {
    try {
        let idQuery = req.params.visa;
        let city = await City.find({isVisaRequired:idQuery})
        return res.status(200).json({
            response: city
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }
}

export { allCities, citiesByID, citiesByName, citiesByContinent, citiesByLanguage, citiesByVisa }