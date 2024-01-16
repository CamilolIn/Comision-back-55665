const http = require("http");
const moment = require("moment");
var url = require("url");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  console.log(req.url)
  // var pathname = url.parse(req.url).pathname;
  var start = moment(/* "20:00:00", 'HH' */).format("HH:mm");
  console.log(start)

  if (req.url === "/") {
    let hourNum = parseInt(start);

    console.log(hourNum);

    if (hourNum >= 18) {
      res.end("Buenas noches, son las " + start + " Horas");
    } else {
      res.end("Buenas tardes o dias, son las " + start + " Horas");
    }
  }

  if (req.url === "/api") {
    res.end("<h1>ESTA RUTA ESTA EN CONSTRUCCION !</h1>");
  }
});

const connectedServer = server.listen(PORT, () => {
  console.log(`Servidor Http escuchando en el puerto ${PORT}`);
});
