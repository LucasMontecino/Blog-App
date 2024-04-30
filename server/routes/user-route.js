const express = require("express");
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users/register", registerUser);
userRouter.post("/users/login", loginUser);

module.exports = userRouter;
