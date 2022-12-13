const http = require("http");
const port = 8000;
const server = http.createServer((request, response) => {
  console.log("hehe");
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.end("hello world!\n");
});

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}/`);
});
