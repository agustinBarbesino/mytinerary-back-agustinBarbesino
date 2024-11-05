import { Router } from "express";
import cityRouter from "./cities.js"
import itineraryRouter from "./itineraries.js"

const indexRouter = Router()

indexRouter.use('/cities', cityRouter)
indexRouter.use('/itineraries', itineraryRouter)

export default indexRouter