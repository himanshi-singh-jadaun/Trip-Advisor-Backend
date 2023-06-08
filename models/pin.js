const mongoose = require("mongoose");

const pinSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
        },
        title: {
            type: String,
            require: true,
            min: 3,
        },
        desc: {
            type: String,
            require: true,
            min: 3,
        },
        rating: {
            type: Number,
            require: true,
            min: 0,
            max: 5,
        },
        lat: {
            type: Number,
            require: true,
        },
        long: {
            type: Number,
            require: true,
        },
    },
    // to give out time when created,updated and all
    { timestamps: true }
);

// created object
const Pin = mongoose.model("pin", pinSchema);

module.exports = Pin;