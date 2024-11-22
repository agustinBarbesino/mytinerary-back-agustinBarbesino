import { Router } from "express"
import { allCities, cityById } from "../controllers/Cities/read.js"
import { createCity, createManyCities } from "../controllers/Cities/create.js"
import { updateCity, updateManyCities, updateCityItineraries } from "../controllers/Cities/update.js"
import { deleteCity, deleteManyCities } from "../controllers/Cities/delete.js"
import citySchema from "../schemas/cities/citySchema.js"
import citiesSchema from "../schemas/cities/citiesSchema.js"
import validator from "../middlewares/validator.js"

const cityRouter = Router()

cityRouter.get("/all", allCities)
cityRouter.get("/id/:id", cityById)
cityRouter.post("/create", validator(citySchema), createCity)
cityRouter.post("/createMany", validator(citiesSchema), createManyCities)
cityRouter.put("/update/:name", validator(citySchema), updateCity)
cityRouter.put("/updateMany/:name", validator(citiesSchema), updateManyCities)
cityRouter.put("/updateItineraries/:id", updateCityItineraries)
cityRouter.delete("/delete/:name", deleteCity)
cityRouter.delete("/deleteMany/:name", deleteManyCities)


export default cityRouter