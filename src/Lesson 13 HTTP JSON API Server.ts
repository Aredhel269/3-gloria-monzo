const http13 = require("http");
const url13 = require("url");

// Codnvertim una data en un objecte amb les parts de l'hora
function parsetime(time : any) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  };
}

// Convertim una data en un objecte amb el temps en format Unix
function unixtime(time: any) {
  return {
    unixtime: time.getTime(),
  };
}

// Creem el servidor HTTP
let server13 = http13.createServer(function (request: any, response: any) {
    // Analitzem la URL de la sol·licitud
  let parseUrl = url13.parse(request.url, true);  
  // Creem l'objecte de temps a partir del paràmetre 'iso' de la URL
  let time = new Date(parseUrl.query.iso);
  let result;

    // Comprovem el camí de la URL i cridem a les funcions corresponents
  if (/^\/api\/parsetime/.test(request.url)) {
    result = parsetime(time);
  } else if (/^\/api\/unixtime/.test(request.url)) {
    result = unixtime(time);
  }

    // Si s'obté un resultat, s'envia com a resposta JSON
  if (result) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } else {
        // Si no es troba cap resultat, es retorna una resposta 404 (Not Found)
    response.writeHead(404);
    response.end();
  }
});

// Escoltem el port proporcionat com a argument de línia de comandes
server.listen(Number(process.argv[2]));