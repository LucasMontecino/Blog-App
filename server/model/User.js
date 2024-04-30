const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  addres: {
    type: String,
    default: null,
  },
  phone: {
    type: String,
    default: null,
  },
  birth: { type: String, default: null },
  isBanned: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
