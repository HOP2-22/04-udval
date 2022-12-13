const { request } = require("express");
const express = require("express");
const port = 8000;
let arr = [
  { name: "udval", age: "18" },
  { name: "emu", age: "18" },
  { name: "hi", age: "16" },
];
const app = express();
app.get("/", (request, response) => {
  response.send(arr);
});
app.post("/post", (request, response) => {
  item = { name: "enerel ", age: "18" };
  arr.push(item);
  response.send(arr);
});
app.delete("/delete", (request, response) => {
  const deleteItem = { name: "emu", age: "18" };
  response.send(arr);
});
app.put("/put", (request, response) => {
  response.send();
});
app.listen(port, () => {
  console.log(`Server Listen: ${port}`);
});
