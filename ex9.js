const http = require("http");
const bl = require("bl");

const resultat = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(resultat[i]);
  }
}
function httpGet(index) {
  http.get(process.argv[2+index], (response) => {
    response.pipe(
      bl(function (err, data) {
        if (err) console.error(err);

        resultat[index] = data.toString();
        count++;

        if (count == 3) printResults();
      })
    );
  });
}

for (i = 0; i < 3; i++) {
  httpGet(i);
}
