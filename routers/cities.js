import { Router } from "express"
import { allCities, cityById } from "../controllers/Cities/read.js"
import { createCity, createManyCities } from "../controllers/Cities/create.js"
import { updateCity, updateManyCities, updateCityItineraries } from "../controllers/Cities/update.js"
import { deleteCity, deleteManyCities } from "../controllers/Cities/delete.js"

const cityRouter = Router()

cityRouter.get("/all", allCities)
cityRouter.get("/id/:id", cityById)
cityRouter.post("/create", createCity)
cityRouter.post("/createMany", createManyCities)
cityRouter.put("/update/:name", updateCity)
cityRouter.put("/updateMany/:name", updateManyCities)
cityRouter.put("/updateItineraries/:id", updateCityItineraries)
cityRouter.delete("/delete/:name", deleteCity)
cityRouter.delete("/deleteMany/:name", deleteManyCities)


export default cityRouter