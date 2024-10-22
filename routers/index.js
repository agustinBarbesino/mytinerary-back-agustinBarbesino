import { Router } from "express";
import cityRouter from "./cities.js"

const indexRouter = Router()

indexRouter.use('/cities', cityRouter)

export default indexRouter