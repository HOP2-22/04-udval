const express = require("express");
const port = 8000;
const app = express();
app.use(express.json());

const router = require("./router/users");

app.use("/users", router);

app.listen(port, () => {
  console.log(`Server Listen: ${port}`);
});
