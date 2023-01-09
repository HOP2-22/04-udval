const express = require("express");
const { getUser, createUser, Login } = require("../controllers/UserController");

const userRouter = express.Router();

userRouter.get("/", getUser).post("/", createUser).post("/login", Login);
module.exports = userRouter;
