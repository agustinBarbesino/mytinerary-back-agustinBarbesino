import { Router } from "express"
import signIn from "../controllers/Auth/signIn.js"
import signOut from "../controllers/Auth/signOut.js"
import passport from "passport"
import generateToken from "../middlewares/generateToken.js"
import isPasswordOk from "../middlewares/isPasswordOk.js"
import accountNoExists from "../middlewares/accountNoExists.js"
import passportGoogle from "../middlewares/passportGoogle.js"

const authRouter = Router()

authRouter.post("/signIn", accountNoExists, isPasswordOk, generateToken, signIn)
authRouter.post("/signOut", passport.authenticate("jwt", {session: false}), signOut)
authRouter.get("/signIn/google", passportGoogle.authenticate("google", {scope: ["email", "profile"], session: false}))
authRouter.get("/signIn/google/callback", passportGoogle.authenticate("google", {session: false}), generateToken, signIn)

export default authRouter