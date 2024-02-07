const net = require("node:net");

function createDate(): string {
  const date: Date = new Date();

  function year(): string {
    return date.getFullYear().toString();
  }

  function month(): string {
    let monthValue: string | number = date.getMonth() + 1;
    if (monthValue <= 9) {
      monthValue = "0" + monthValue;
    }
    return monthValue.toString();
  }

  function day(): string {
    let dayValue: string | number = date.getDate();
    if (dayValue <= 9) {
      dayValue = "0" + dayValue;
    }
    return dayValue.toString();
  }

  function hours(): string {
    let hoursValue: string | number = date.getHours();
    if (hoursValue <= 9) {
      hoursValue = "0" + hoursValue;
    }
    return hoursValue.toString();
  }

  function minutes(): string {
    let minutesValue: string | number = date.getMinutes();
    if (minutesValue <= 9) {
      minutesValue = "0" + minutesValue;
    }
    return minutesValue.toString();
  }

  let actualDate: string =
    year() + "-" + month() + "-" + day() + " " + hours() + ":" + minutes();
  return actualDate;
}

const server1 = net.createServer(function (socket: any) {
  // socket.write(createDate)
  socket.end(createDate() + "\n");
});

server1.listen(Number(process.argv[2]));
