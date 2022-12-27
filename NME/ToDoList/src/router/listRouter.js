const express = require("express");
const {
  getList,
  addData,
  updateData,
  removeData,
} = require("../controllers/listController");
const listRouter = express.Router();

listRouter
  .get("/", getList)
  .post("/", addData)
  .delete("/", removeData)
  .patch("/", updateData);
module.exports = listRouter;
