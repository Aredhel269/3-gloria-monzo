/*
## COLECCIÓN HTTP (Ejercicio 8 de 13)  

Escribe un programa que realice una petición HTTP GET a una URL provista  
como primer argumento del programa. Almacena todos los datos recibidos del  
servidor, es decir no sólo el primer evento "data", y luego escribe a  
consola dos líneas:  

» En la primera escribe la cantidad de caracteres recibidos.                  
» En la segunda escribe la totalidad de caracteres recibidos (todo el string).                                                                    

─────────────────────────────────────────────────────────────────────────────  

## PISTAS  

Hay por lo menos dos formas de resolver este problema:  

1) Almacenar los datos de todos los eventos "data" para luego agregarlos  
los resultados antes de imprimirlos por consola. Puedes usar el evento  
"end" para saber cuando terminas de recibir datos.

2) Usa un paquete de terceros para evitar los problemas de almacenar el       
stream completo de datos. Por ejemplo, tienes a disposición: bl (Buffer       
List) o concat-stream.

<https://npmjs.com/bl> <https://npmjs.com/concat-stream>

Para instalar alguno de estos paquetes usa Node Package Manager npm de la     
siguiente forma:

$ npm install bl

Npm descargará el paquete e instalará la última versión disponible en la      
carpeta node_modules. Todos los paquetes instalados ahí pueden cargarse       
desde tu programa usando require sin prefijo. Ejemplo:

const bl = require('bl')

Node busca primero en su núcleo de módulos y si no lo encuentra busca en      
node_modules.

Ambos paquetes pueden usar un stream piped para capturar los datos. Una       
vez que se acaba el stream se dispara un callback con todos los datos:        

response.pipe(bl(function (err, data) { ... }))
// or
response.pipe(concatStream(function (data) {  ... }))

Recuerda hacer data.toString() para convertir al Buffer de Node a String.     
*/
const http = require("http");
const bl = require("bl");

const URL = process.argv[2];

http.get(URL, (response) => {
  response.pipe(
    bl(function (err, data) {
      if (err) return console.error(err);

      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
