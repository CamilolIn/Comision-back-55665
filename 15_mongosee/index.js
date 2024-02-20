
const express = require('express')
const app = express();
const Database = require('./db');
const CONFIG = require('./config');
const Product = require('./routes');
app.use(express.json())
app.use('/product', Product);


app.listen(CONFIG.PORT, err => {
    if (err) return console.log(err)
    console.log(`Servidor corriendo en el puerto: ${CONFIG.PORT}`);
    Database.connect();
})