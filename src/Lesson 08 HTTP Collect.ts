const http8 = require("http");
const bl = require("bl");

const Url: string = process.argv[2];

http8.get(Url, (response: any) => {
  response.pipe(
    bl(function (err: Error | null, data: string) {
      if (err) return console.error(err);

      data = data.toString();
      console.log(data.length);
      console.log(data);
    })
  );
});
