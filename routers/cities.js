import { Router } from "express"
import { allCities, cityById } from "../controllers/Cities/read.js"

const cityRouter = Router()

cityRouter.get("/all", allCities)
cityRouter.get("/id/:id", cityById)

export default cityRouter