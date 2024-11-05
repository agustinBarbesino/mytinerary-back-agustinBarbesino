import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.updateOne(
            { id: req.params.id },
            { $set: req.body }
        );
        return res.status(200).json(itinerary);
    } catch (error) {
        next(error);
    }
}

const updateManyItineraries = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.updateMany(
            { id: req.params.id },
            { $set: req.body }
        );
        return res.status(200).json(itinerary);
    } catch (error) {
        next(error);
    }
}

export { updateItinerary, updateManyItineraries }