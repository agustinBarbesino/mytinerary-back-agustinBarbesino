import Itinerary from "../../models/Itinerary.js";
const createItinerary = async (req, res, next) => {
    try {
        await Itinerary.create(req.body);
        return res.status(201).json({ success: true });
    } catch (error) {
        next(error);
    }
}

const createManyItineraries = async (req, res, next) => {
    try {
        await Itinerary.insertMany(req.body.itineraries);
        return res.status(201).json({ response: true });
    } catch (error) {
        next(error);
    }
}

export { createItinerary, createManyItineraries }