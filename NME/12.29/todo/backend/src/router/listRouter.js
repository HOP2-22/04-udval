const express = require("express");
const {
  getList,
  createList,
  deleteList,
  updateData,
} = require("../controller/listController");

const listRouter = express.Router();

listRouter
  .get("/", getList)
  .post("/", createList)
  .delete("/:id", deleteList)
  .put("/:id", updateData);

module.exports = listRouter;
