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
  addres: String,
  phone: {
    type: String,
  },
  birth: String,
  isBanned: {
    type: Boolean,
    defaultValue: false,
  },
});

module.exports = mongoose.model("User", userSchema);
