import { Router } from "express"
import signUp from "../controllers/Users/signUp.js"
import { allUsers, userByName } from "../controllers/Users/read.js"
import updateUser from "../controllers/Users/update.js"
import {  deleteOne, deleteMany } from "../controllers/Users/delete.js"
import passport from "../middlewares/passport.js"
import hashPassword from "../middlewares/createHash.js"
import accountExists from "../middlewares/accountExists.js"
import validator from "../middlewares/validator.js"
import userSchema from "../schemas/users/userSchema.js"

const userRouter = Router()

userRouter.get("/all", passport.authenticate('jwt',{session:false}), allUsers)
userRouter.get("/name", passport.authenticate('jwt',{session:false}), userByName)
userRouter.post("/signUp", validator(userSchema), accountExists, hashPassword, signUp)
userRouter.put("/update", passport.authenticate("jwt", {session: false}), validator(userSchema), updateUser)
userRouter.delete("/deleteOne", passport.authenticate("jwt", {session: false}), deleteOne)
userRouter.delete("/deleteMany", passport.authenticate("jwt", {session: false}), deleteMany)

export default userRouter