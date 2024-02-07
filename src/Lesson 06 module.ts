const fs6 = require("fs");

// Funció declarada
module.exports = function hola(desti: string, extens: string, c: (error: Error | null, lista?: string[]) => void) {
  fs6.readdir(desti, (error: Error | null, files: string[]) => {
    if (error) {
      c(error);
    } else {
      const lista = files.filter((file) => file.endsWith(`.${extens}`));
      c(null, lista);
    }
  });
};