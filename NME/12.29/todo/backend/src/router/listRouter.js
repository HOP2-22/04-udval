const express = require("express");
const {
  getList,
  createList,
  deleteList,
} = require("../controller/listController");

const listRouter = express.Router();

listRouter.get("/", getList).post("/", createList).delete("/:id", deleteList);

module.exports = listRouter;
