// fer export      module.exports = function (args) {  ...  }

const fs = require("fs");

//funció declarada

module.exports = function hola(destino, extens, c) {
  fs.readdir(destino, (error, files) => {
    if (error) {
      c(error);
    } else {
      const lista = files.filter((file) => file.endsWith(`.${extens}`));
      c(null, lista);
    }
  });
};
 /*
mymodule(directory, ext, function (err, files) {
  if (err) {
    return console.error("error:", err);
  }

  files.forEach(function (file) {
    console.log(file);
  });
});*/
//Creació del mdoul `mymodule.js`

//importacio del modul
//const fs = require('fs')

//
