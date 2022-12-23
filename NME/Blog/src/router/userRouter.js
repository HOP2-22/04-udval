const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.get("/user/:id", getUserById);
userRouter.post("/user/create", createUser);
userRouter.delete("/user/:id", deleteUser);
userRouter.put("/user/update/:id/", updateUser);

module.exports = userRouter;
