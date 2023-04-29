const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const blogroute = require("./routes/blogrout");
const dotenv = require("dotenv");
app.use(cors());

app.use(express.json());
app.use(bodyparser.json({ extended: true }));
app.use(bodyparser.urlencoded({ extended: true }));

// db connection
dotenv.config();
const connetion = require("./database/db");
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
connetion(username, password);
// define Api routes

app.use("/api", blogroute);

app.listen(5000, () => {
  console.log("server started at port 5000");
});
