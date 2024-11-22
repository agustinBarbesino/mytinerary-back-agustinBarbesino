import City from "../../models/City.js";

const updateCity = async (req, res, next) => {
    try {
        const city = await City.updateOne(
            { name: req.params.name },
            { name: req.body.name, 
              img: req.body.img, 
              country: req.body.country, 
              continent: req.body.continent, 
              description: req.body.description, 
              currency: req.body.currency,
              itineraries: req.body.itineraries }
        );
        return res.status(200).json(city);
    } catch (error) {
        next(error);
    }
};

const updateManyCities = async (req, res, next) => {
    try {
        const city = await City.updateMany(
            { name: req.params.name },
            { name: req.body.cities }
        );
        return res.status(200).json(city);
    } catch (error) {
        next(error);
    }
}

const updateCityItineraries = async (req, res, next) => {
    try {
        const city = await City.updateOne(
            { id: req.params.id },
            { itineraries: req.body.itineraries }
        );
        return res.status(200).json(city);
    } catch (error) {
        next(error);
    }
}

export { updateCity, updateManyCities, updateCityItineraries }