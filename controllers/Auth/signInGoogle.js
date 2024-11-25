import { token } from "morgan"
import User from "../../models/User.js"

const signInGoogle = async (req, res) => {
    try {
        await User.find(
            {email: req.body.email || req.user.email},
            {inLine: true}
        )
        return res.redirect('http://localhost:5173/home?token='+req.token)
            } catch (error) {
                next(error)
            }
    }

export default signInGoogle