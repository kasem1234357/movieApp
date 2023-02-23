const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require( 'cors' );
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const path = require("path");
const connectDB = require("./mongodb/connect");
dotenv.config();
 mongoose.set("strictQuery", true);
app.use( cors() );
app.use(express.json());
app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL);

        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
