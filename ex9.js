/*
## MALABARES CON ASINCRONISMO (Ejercicio 9 de 13)  

Este ejercicio es similar al anterior puesto que debes usar http.get().  
Sin embargo, esta vez tu programa recibirá tres URLs como argumentos.  

Tu programa deberá imprimir el contenido de cada una de las URLs en  
consola en el mismo orden que fueron recibidos los argumentos. No deberás  
imprimir el largo, solo el contenido como String, pero debes respetar el  
orden de llegada de los argumentos.  

─────────────────────────────────────────────────────────────────────────────  

## PISTAS  

Como las llamadas a las URLs son asíncronas, es probable que no recibas  


Tendrás que encolar los resultados y mantener un contador de cuántas          
peticiones han sido recibidas de modo que al llegar al final puedas       
imprimir los resultados.

En la vida real, utilizar [`async`](https://www.npmjs.com/package/async) o

[`run-parallel`](https://www.npmjs.com/package/run-parallel) facilitaria  
la continuación de los callbacks. Pero para el alcance de este ejercicio      
se debería realizar sin utilizarlo.

1. Inicialitzar una matriu buida 'results' per emmagatzemar les respostes.
2. Inicialitzar un comptador 'count' a 0 per seguir el nombre de sol·licituds que han retornat.
3. Definir la funció 'printResults' que imprimeix les respostes emmagatzemades a la consola.
4. Definir la funció 'httpGet' que realitza una sol·licitud HTTP GET i emmagatzema la resposta a la matriu 'results'.
   a. Utilitzar 'http.get' amb l'URL proporcionada com a argument.
   b. Emprar 'bl' per col·leccionar les dades de la resposta.
   c. Quan totes les dades hagin arribat, convertir-les a una cadena i emmagatzemar-les a 'results'.
   d. Incrementar el comptador 'count'.
   e. Si totes les sol·licituds han retornat, cridar 'printResults'.
5. Fer un bucle 'for' per fer tres crides a 'httpGet' amb índexs diferents per a cada URL proporcionada.

*/
const http = require("http");
const bl = require("bl");

const resultat = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(resultat[i]);
  }
}
function httpGet(index) {
  http.get(process.argv[2+index], (response) => {
    response.pipe(
      bl(function (err, data) {
        if (err) console.error(err);

        resultat[index] = data.toString();
        count++;

        if (count == 3) printResults();
      })
    );
  });
}

for (i = 0; i < 3; i++) {
  httpGet(i);
}
