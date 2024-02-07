// Importació moduls
const http = require("http");

// Obtenim la url
const url: string = process.argv[2]

// Realitzem la petició HTTP
http.get(url, (response: any) => { // response: Buffer
    // Convertim els buffers a string
    response.setEncoding('utf8')

    response.on('data', (data: any) => {
        console.log(data)
    });

    response.on('error', (error: Error) => {
        console.error('error: ', error)
    });

    response.on('end', () => {
        console.log('')
    })
});