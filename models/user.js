const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            min: 6,
        },
    },
    // to give out time when created,updated and all
    { timestamps: true }
);

// created object
const User = mongoose.model("user", userSchema);

module.exports = User;