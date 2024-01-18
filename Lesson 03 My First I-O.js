const fs = require("fs");

let buffer = fs.readFileSync(process.argv[2]);

let stringBuffer = buffer.toString();

let strArray = stringBuffer.split("\n");

console.log(strArray.length - 1)