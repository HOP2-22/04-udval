const express = require("express");

const app = express();
const mongoose = require("mongoose");
const urlRouter = require("./router/URLRouter");
const userRouter = require("./router/UserRouter");
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established");
});

app.use("/", urlRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
