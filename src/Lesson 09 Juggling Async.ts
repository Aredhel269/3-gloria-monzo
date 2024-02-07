const http9 = require("http");
const bl9 = require("bl");

const result: string[] = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}
function httpGet(index: number) {
  http9.get(process.argv[2 + index], (response: any) => {
    response.pipe(
      bl9(function (err: Error, data: Buffer) {
        if (err) console.error(err);

        result[index] = data.toString();
        count++;

        if (count == 3) printResults();
      })
    );
  });
}

for (i = 0; i < 3; i++) {
  httpGet(i);
}
