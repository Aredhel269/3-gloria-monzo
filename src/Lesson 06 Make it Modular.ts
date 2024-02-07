const mymodule = require("./Lesson 06 module");
const path6 = require("path");

let directori6 = process.argv[2];
let extensio6 = process.argv[3];

// Funció llamada
mymodule(directori6, extensio6, (error: Error | null, files: string[]) => {
  if (error) {
    console.error(error);
  } else {
    files.forEach((file) => {
      if (path6.extname(file) === `.${extensio6}`) console.log(file);
    });
  }
});
