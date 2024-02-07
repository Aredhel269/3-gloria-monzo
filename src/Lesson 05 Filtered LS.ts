const fs5 = require("fs");
const path5 = require("path");

let directori5: string = process.argv[2];
let extensio5: string = "." + process.argv[3];

fs5.readdir(directori5, (error: Error | null, files: string[]) => {
  if (error) {
    console.log("error", error);
  } else {
    files.forEach((file: string) => {
      if (path5.extname(file) == extensio5) 
      console.log(file);
    });
  }
});
