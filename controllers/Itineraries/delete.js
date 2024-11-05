import Itinerary from "../../models/Itinerary.js";

const deleteItinerary = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.deleteOne(
            { id: req.params.id });
        return res.status(200).json(itinerary);
    } catch (error) {
        next(error);
    }
};

const deleteManyItineraries = async (req, res, next) => {
    try {
        const itinerary = await Itinerary.deleteMany(
            { id: req.params.id });
        return res.status(200).json(itinerary);
    } catch (error) {
        next(error);
    }
};

export { deleteItinerary, deleteManyItineraries }