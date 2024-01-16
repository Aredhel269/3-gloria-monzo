/* ## LS FILTRADO (Ejercicio 5 de 13)  

Crea un programa que dado un directorio imprima una lista de archivos  
filtrados por la extensión. El primer argumento será la ruta al directorio  
(ej: '/path/dir/') y el segundo la extensión a filtrar, por ejemplo si  
recibes 'txt' deberás filtrar todos los archivos que terminen en .txt.  

Nota: el segundo argumento no incluye el punto '.'.  

La lista de archivos a imprimir en consola debe hacerse un archivo por  
línea y debes utilizar Async I/O.  

## PISTAS  

La función fs.readdir() recibe como parámetros: una ruta(path) y un  
callback. La firma del callback es:  

function callback (error, lista) { }  

La lista es un arreglo de nombres de archivos de tipo String.  

Además, el módulo path puede resultar útil, especialmente la función
extname.
*/

const fs = require("fs");
const path = require("path");

let directori = process.argv[2];
let extensio = "." + process.argv[3];

fs.readdir(directori, (error, files) => {
  if (error) {
    console.log("error", error);
  } else {
    files.forEach((file) => {
      if (path.extname(file) == extensio) 
      console.log(file);
    });
  }
});
