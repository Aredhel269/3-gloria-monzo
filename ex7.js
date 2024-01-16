
/*
const http = require("http")
const url = process.argv[2]

// fer sol·licitud HTTP GET a la URL
http.get(url, (response) => {
    // configuem la codificació per rebre str enlloc de buffers
    response.setEncoding('utf8');
    // escoltar esdeveniment data
    response.on("data", (data) => {
        console.log(data);
    });
    //escoltar esdeveniment error
    response.on("error", (err) => {
        console.error(`Error: ${err.message}`);
    })
    // escoltar esdeveniment end
    response.on("end", (end) => {
        console.log("End of ")
    })
})
ç
*/
/*
const http = require("http");

// Obtener la URL como argumento de la línea de comandos
const url = process.argv[2];

// Realizar una solicitud HTTP GET a la URL proporcionada
http.get(url, (response) => {
  // Configurar la codificación para recibir Strings en lugar de Buffers
response.setEncoding("utf8");

  // Escuchar el evento 'data'
response.on("data", (data) => {
    console.log(data);
});

  // Escuchar el evento 'error'
response.on("error", (error) => {
    console.error(`Error en la solicitud: ${error.message}`);
});

  // Escuchar el evento 'end'

});*/
// importació moduls
const http = require("http");

// obtenim la url
const URL = process.argv[2]

//
http.get(URL, (response) => {
    // convertim els buffers a string
    response.setEncoding('utf8')

    response.on('data', (data) => {
        console.log(data)
    });

    response.on('error', (error) => {
        console.error('error: ', error)
    });

    response.on('end', () => {
        console.log('')
    })
});

