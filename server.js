require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL);

app.use("/api", require("./routes/api"));

app.listen(5000, () => {
  console.log("Server Running");
});
