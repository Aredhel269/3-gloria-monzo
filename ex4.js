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
