const http = require("http");
const map = require("through2-map");

let port = process.argv[2];

const server = http.createServer((request, response) => {
  request
    .pipe(
      map(function (chunk) {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(response);
});

server.listen(Number(port));
