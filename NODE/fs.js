const crypto = require("crypto");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
  const result = fs.readFileSync("./text.txt").toString();
  res.end(`The content of the files are: ${result}`);
});

server.listen(8000);
console.log("Server is running on http://localhost:8000");

const generateOTP = (digits = 6) => {
  const minNum = Math.pow(10, digits - 1);
  const maxNum = Math.pow(10, digits) - 1;
  const result = crypto.randomInt(minNum, maxNum);
  return result;
};
console.log(generateOTP(5));
