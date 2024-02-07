const http11 = require("http");
const fs = require("fs");

let port = process.argv[2];
let file = process.argv[3];

const server = http.createServer((request: any, response: any) => {
  fs.createReadStream(file).pipe(response);
});
server.listen(Number(port));