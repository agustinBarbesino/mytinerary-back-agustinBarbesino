import City from '../../models/City.js'

const createCity = async (req, res, next) => {
    try {
        await City.create(req.body)
        return res.status(201).json({ success: true })
    } catch (error) {
        next(error)
    }
}

const createManyCities = async (req, res, next) => {
    try {
        await City.insertMany(req.body.cities)
        return res.status(201).json({ response: true })
    } catch (error) {
        next(error)
    }
}

export { createCity, createManyCities }