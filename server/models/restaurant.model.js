const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({

    id: { type: Number },
    name: { type: String },
    neighborhood: { type: String },
    photograph: { type: String },
    address: { type: String },
    latLng: {
        lat: { type: Number },
        lng: { type: Number },
    },
    image: { type: String },
    cuisine_type: { type: String },
    operating_hours: {
        Monday: { type: String },
        Tuesday: { type: String },
        Wednesday: { type: String },
        Thursday: { type: String },
        Friday: { type: String },
        Saturday: { type: String },
        Sunday: { type: String },
    },
    reviews: [
        {
            name: { type: String },
            date: { type: Date },
            rating: { type: Number },
            comments: { type: String }
        },
    ]

},
    {
        timestamps: true,
    });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;

