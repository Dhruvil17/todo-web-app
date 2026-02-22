const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

dotenv.config();

const PORT = process.env.PORT;
const DB_CONNECTION = process.env.DB_CONNECTION;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use("/", routes);

mongoose
    .connect(DB_CONNECTION, {
        dbName: "practice",
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log("Server is up and running on PORT", PORT);
        });
    });
