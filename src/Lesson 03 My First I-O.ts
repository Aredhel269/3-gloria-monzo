const fs3 = require("fs");

let buffer: Buffer = fs3.readFileSync(process.argv[2]);

let stringBuffer: string = buffer.toString();

let strArray: string[] = stringBuffer.split("\n");

console.log(strArray.length - 1);