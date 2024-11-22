import { Router } from "express";
import cityRouter from "./cities.js"
import itineraryRouter from "./itineraries.js"
import authRouter from "./auth.js"
import userRouter from "./users.js"

const indexRouter = Router()

indexRouter.use('/cities', cityRouter)
indexRouter.use('/itineraries', itineraryRouter)
indexRouter.use('/auth', authRouter)
indexRouter.use('/users', userRouter)              

export default indexRouter