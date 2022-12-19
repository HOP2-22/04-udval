const express = require("express");
const port = 8000;
const app = express();
app.use(express.json());

const listRouter = require("./router/listRouter");

app.use("/", listRouter);

app.listen(port, () => {
  console.log(`Server Listen: ${port}`);
});
