const express = require("express");
const { getUsers, createUser } = require("../users");
const router = express.Router();

router.get("/", getUsers).post("/", createUser);
module.exports = router;
