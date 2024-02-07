const http12 = require("http");
const map = require("through2-map");

// Port on escoltarà el servidor
const port12: number = Number(process.argv[2]);

// Creació del servidor HTTP
const server12 = http12.createServer((request: any, response: Response) => {
    // Els paquets de la petició es transformen a majúscules i s'envien com a resposta
  request
    .pipe(
      map(function (chunk: Buffer) {
        return chunk.toString().toUpperCase();
      })
    )
    // Enviam la resposta al client
    .pipe(response);
});

// El servidor escolta al port especificat
server12.listen(port12);