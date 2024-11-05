import { Router } from "express";
import { allItineraries, itineraryById, itinerariesByCity } from "../controllers/Itineraries/read.js";
import { createItinerary, createManyItineraries } from "../controllers/Itineraries/create.js";
import { updateItinerary, updateManyItineraries } from "../controllers/Itineraries/update.js";
import { deleteItinerary, deleteManyItineraries } from "../controllers/Itineraries/delete.js";

const ItineraryRouter = Router()

ItineraryRouter.get("/all", allItineraries)
ItineraryRouter.get("/id/:id", itineraryById)
ItineraryRouter.get("/city/:cityId", itinerariesByCity)
ItineraryRouter.post("/create", createItinerary)
ItineraryRouter.post("/createMany", createManyItineraries)
ItineraryRouter.put("/update/:id", updateItinerary)
ItineraryRouter.put("/updateMany/:id", updateManyItineraries)
ItineraryRouter.delete("/delete/:id", deleteItinerary)
ItineraryRouter.delete("/deleteMany/:id", deleteManyItineraries)

export default ItineraryRouter