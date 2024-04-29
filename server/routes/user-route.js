const express = require("express");
const { getUsers, registerUser } = require("../controllers/user-controller");

const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", registerUser);

module.exports = userRouter;
