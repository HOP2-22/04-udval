const express = require("express");
const port = 8000;
const app = express();
const mongoose = require("mongoose");
const postRouter = require("./router/postRouter");

app.use(express.json());

const userRouter = require("./router/userRouter");

mongoose.connect(
  "mongodb+srv://huurhunuda:Udaemrhuurhunshd1@cluster1.iifkkb1.mongodb.net/blog?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});
app.use("/", userRouter);
app.use("/", postRouter);
app.listen(port, () => {
  console.log(`Server Listen: ${port}`);
});
