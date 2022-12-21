const express = require("express");
const port = 8000;
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const listRouter = require("./router/listRouter");

mongoose.connect(
  "mongodb+srv://huurhunuda:Udaemrhuurhunshd1@cluster1.iifkkb1.mongodb.net/Hop2?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});
app.use("/", listRouter);

app.listen(port, () => {
  console.log(`Server Listen: ${port}`);
});
