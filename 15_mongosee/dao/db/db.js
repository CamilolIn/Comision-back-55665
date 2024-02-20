const mongoose = require('mongoose');
const CONFIG = require('./config');

module.exports = {
    connection: null,
    connect: () => {
        //if (this.connection) return this.connection;
        return mongoose.connect('mongodb+srv://camilolindarte1992:camilo123456@cluster0.dzpdjrj.mongodb.net/quizTest', { useUnifiedTopology: true, useNewUrlParser: true }).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    }
}