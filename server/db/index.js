const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to the db"))
  .catch((e) => console.log(e));
