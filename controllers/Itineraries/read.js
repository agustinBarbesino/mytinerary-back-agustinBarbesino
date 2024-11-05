import Itinerary from "../../models/Itinerary.js";

const allItineraries = async (req, res, next) => {
    try {
        const itineraries = await Itinerary.find({});
        return res.status(200).json(itineraries);
    } catch (error) {
        next(error);
    }
}

const itinerariesByCity = async (req, res, next) => {
    try {
        const { cityId } = req.params
        const itineraries = await Itinerary.find({ city: cityId });
        return res.status(200).json(itineraries);
    } catch (error) {
        next(error);
    }
}

const itineraryById = async (req, res, next) => {
    try {
        let idparam = req.params.id
        const itinerary = await Itinerary.find({ id: idparam });
        return res.status(200).json(itinerary);
    } catch (error) {    
        next(error);
    }
}

export { allItineraries, itinerariesByCity, itineraryById }