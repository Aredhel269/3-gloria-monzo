const fs4 = require("fs");

fs4.readFile(process.argv[2], "utf-8", (error: Error | null, data: string) => {
  if (error) {
    console.log("error", error);
  } else {
    let stringData: string = data.toString();

    let strArray: string [] = stringData.split("\n");

    console.log(strArray.length - 1);
  }
});