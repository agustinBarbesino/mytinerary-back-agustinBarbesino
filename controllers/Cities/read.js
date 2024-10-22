import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query
        let query = {}
        
        if (name) {
            query.name = {$regex: '^'+name+'.*', $options: 'i'}
        }

        let all = await City.find(query)
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
        let all = await Store.find({id : idparam})
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }     
}

export {allCities, cityById} 