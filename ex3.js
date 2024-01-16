/*
modul fs node
    const fs = require('fs')

per llegir arxiu usem:
    fs.readFileSync('/path/to/file')
==> objecte Buffer amb els continguts de l'arxiu

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

let buffer = fs.readFileSync(process.argv[2]);

let stringBuffer = buffer.toString();

let strArray = stringBuffer.split("\n");

console.log(strArray.length - 1)