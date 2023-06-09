const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

dotenv.config();

// by doing this we can use everything as json
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Mongodb connected");
    })
    .catch((err) => console.log(err));

// Linking the users & pins route to the app object
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(() => {
    console.log("Backend server is running");
})
