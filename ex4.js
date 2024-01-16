/*
## modul fs node
    const fs = require('fs')

## per llegir arxiu usem:
    fs.readFile('/path/to/file')

## i processem el resultat com una funció de callback 
## que s'invoca al acabar la lectura de l'arxiu 

## sintaxi callback node
    function callback (error, data) {...}

## error si el primer paràmetre = null, sinó
## data = objecte buffer
## passar 'utf8' com a segon paràmetre
## callback tercer paràmetre --> així data => string

objecte de Buffer creat a partir de la cadena My name is Paul
    const stringBuf = Buffer.from('My name is Paul');

toString() converteix els bytes d'un búfer a una str
    const str = buf.toString()

amb .split() convertim l'str en un array de substrings
usem \n com a delimitador (el fitxer de test no té cap salt de 
línia al final de la última línia, per tant es tindrà un array
amb un element més que el nº de salts de línia)
*/
const fs = require("fs");

fs.readFile(process.argv[2], "utf-8", (error, data) => {
  if (error) {
    console.log("error", error);
  } else {
    let stringData = data.toString();

    let strArray = stringData.split(["\n"]);

    console.log(strArray.length - 1);
  }
});
