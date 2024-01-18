const mymodule = require("./module");
const path = require("path");

let directori = process.argv[2];
let extensio = process.argv[3];

// Funció llamada
mymodule(directori, extensio, (error, files) => {
  if (error) {
    console.error(error);
  } else {
    files.forEach((file) => {
      if (path.extname(file) === `.${extensio}`) console.log(file);
    });
  }
});
