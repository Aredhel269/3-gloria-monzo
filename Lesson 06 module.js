const fs = require("fs");

// Funció declarada
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