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

