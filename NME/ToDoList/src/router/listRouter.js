const express = require("express");
const {
  getList,
  createList,
  deleteList,
  checkList,
} = require("../controllers/listController");
const listRouter = express.Router();

listRouter
  .get("/", getList)
  .post("/", createList)
  .delete("/", deleteList)
  .put("/", checkList);
module.exports = listRouter;
