import Itinerary from "../../models/Itinerary.js"

let create = async (req, res, next) => {
    try {
        let itinerary = req.body;

        let newItinerary = await Itinerary.create(itinerary);
        return res.status(201).json({
            response: newItinerary,
        });
    } catch (error) {
        next(error); 
    }
};

export default create