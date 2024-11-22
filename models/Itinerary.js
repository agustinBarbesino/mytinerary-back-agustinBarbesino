import { Schema, model } from "mongoose";

let collection = 'itineraries'

let schema = new Schema({
    id: {type:Number, required: false},
    userName: {type:String, required: true},
    userImg: {type:String, required: true},
    price: {type:Number, required: true},
    duration: {type:Number, required: true},
    likes: {type:Number, required: false},
    hashtags: {type:Array, required: false},
    comments: {type:Array, required: false},
    city: {type:Schema.Types.ObjectId , ref:'cities', required: true}
}, {
    timestamps: true
})

let Itinerary = model(collection, schema)

export default Itinerary