import { createServer } from "node:http";

const server = createServer();

server.on("request", (req, res) => {
  console.log("A request received.");
  res.end("John Doe");
});

server.listen(3000, () => {
  console.log("Server is listening on http://localhost:3000");
});
