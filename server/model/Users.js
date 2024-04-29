const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: String,
  name: String,
  lastname: String,
  date: {
    type: Date,
    default: date.now,
  },
  phone: {
    type: String,
  },
  birth: String,
});
