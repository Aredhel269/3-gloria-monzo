const net = require("node:net");

function createDate() {
  const date = new Date();

  function year() {
    return date.getFullYear();
  }

  function month() {
    let monthValue = date.getMonth() + 1;
    if (monthValue <= 9) {
      monthValue = "0" + monthValue;
    }
    return monthValue;
  }

  function day() {
    let dayValue = date.getDate();
    if (dayValue <= 9) {
      dayValue = "0" + dayValue;
    }
    return dayValue;
  }

  function hours() {
    let hoursValue = date.getHours();
    if (hoursValue <= 9) {
      hoursValue = "0" + hoursValue;
    }
    return hoursValue;
  }

  function minutes() {
    let minutesValue = date.getMinutes();
    if (minutesValue <= 9) {
      minutesValue = "0" + minutesValue;
    }
    return minutesValue;
  }

  let actualDate =
    year() + "-" + month() + "-" + day() + " " + hours() + ":" + minutes();
  return actualDate;
}

const server = net.createServer(function (socket) {
  // socket.write(createDate)
  socket.end(createDate() + "\n");
});

server.listen(Number(process.argv[2]));
