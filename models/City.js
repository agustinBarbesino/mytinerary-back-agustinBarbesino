import { Schema, model } from "mongoose";

let collection = 'cities'

let schema = new Schema({
    id: {type:Number, required: true},
    name: {type:String, required: true},
    img: {type:String, required: true},
    country: {type:String, required: true},
    continent: {type:String, required: true},
    description: {type:String, required: true},
    currency: {type:String, required: true},
    itineraries: [{type:Schema.Types.ObjectId, ref:'itineraries', required: true}]
}, {
    timestamps: true
})

let City = model(collection, schema)

export default City