import User from "../../models/User.js"

const allUsers = async (req,res,next) => {
    try {
        let { name } = req.query
        let query = {}
        if (name) {
            query.name = {$regex: name, $options: 'i'}
        }
        let all = await User.find(query)

        return res.status(200).json({
            response: all
        })
    } catch (error) {
        next(error)
    }        
}

const userByName = async (req,res,next) => {
    try {
        let { name } = req.query
        
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }

        let user = await User.find(name);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            response: user
        })

    } catch (error){
        next(error)
    }
}

export { allUsers, userByName }