const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

//Routes

let count = 0

app.get("/", function (req, res) {
  res.send(`<h1 style="color: blue;" >  Hola mundo con express  </h1> `);
});
app.get("/hellow", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/visitas", function (req, res) {
  count++
  res.send({visitas:count});
});

app.listen(PORT, () => {
  console.log("Server is run on port ", PORT);
});
