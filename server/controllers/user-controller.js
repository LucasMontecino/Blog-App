const mongoose = require("mongoose");
const User = require("../model/User");

// get the list of users
// post a new user - register
// login with a validate username and password
// update values of the user

// ban a user
// delete a user

async function getUsers(req, res) {
  try {
    const userList = await User.find();

    if (userList.length === 0) {
      return res.status(400).json("There's no users in the list yet!");
    }

    return res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({
      message: "There's a problem with the server, please try again later.",
    });
  }
}

async function registerUser(req, res) {
  const { email, password } = req.body;

  const date = new Date();

  try {
    const newUser = new User({ email, password, date });

    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "There's a problem with the server, please try again later.",
    });
  }
}

module.exports = { getUsers, registerUser };
