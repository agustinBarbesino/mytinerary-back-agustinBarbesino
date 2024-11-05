import City from "../../models/City.js";

const deleteCity = async (req, res, next) => {
    try {
        const city = await City.deleteOne(
            { name: req.params.name });
        return res.status(200).json(city);
    } catch (error) {
        next(error);
    }
}

const deleteManyCities = async (req, res, next) => {
    try {
        const city = await City.deleteMany(
            { name: req.params.name });
        return res.status(200).json(city);
    } catch (error) {
        next(error);
    }
}

export { deleteCity, deleteManyCities }