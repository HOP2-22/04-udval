const express = require("express");
const port = 9000;
const app = express();
const mongoose = require("mongoose");
const urlRouter = require("./router/URLRouter");
app.use(express.json());

mongoose.connect(
  "mongodb+srv://huurhunuda:Udaemrhuurhunshd1@cluster1.iifkkb1.mongodb.net/boginoo?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("connection established");
});

app.use("/", urlRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
