import City from "../../models/City.js"
import "../../models/Itinerary.js"

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query
        let query = {}
        
        if (name) {
            query.name = {$regex: '^'+name+'.*', $options: 'i'}
        }

        let all = await City.find(query).populate('itineraries').exec()  
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

let cityById = async (req, res, next) => {
    try {
        let idparam = req.params.id
        let all = await City.find({id : idparam})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

export {allCities, cityById} 