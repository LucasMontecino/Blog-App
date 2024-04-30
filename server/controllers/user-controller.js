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
    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json("There is a user with the same email !");
    }

    const newUser = new User({ email, password, date });

    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "There's a problem with the server, please try again later.",
    });
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && password === user.password) {
      return res.status(200).json(`Welcome again ${user.email}!`);
    }

    return res
      .status(400)
      .json("There is no user with this email. Try again please.");
  } catch (error) {
    res.status(500).json({
      message: "There's a problem with the server, please try again later.",
    });
  }
}

// async function updateUser(req, res) {}

module.exports = { getUsers, registerUser, loginUser };
