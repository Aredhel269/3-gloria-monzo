const http = require("http");
const fs = require("fs");

let port = process.argv[2];
let file = process.argv[3];

// server: arg1 port, arg2 ruta(process.argv[arg3])
const server = http.createServer((request, response) => {
  fs.createReadStream(file).pipe(response);
});
server.listen(Number(port));
