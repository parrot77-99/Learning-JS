// 1. info about my node js

const http = require("http");
const os = require("os");

const getTotalMemory = () => os.totalmem() / (1024 * 1024 * 1024);
console.log(getTotalMemory());

// create local server

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello my name is Saugat!",
    })
  );
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}/`);
});
