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
