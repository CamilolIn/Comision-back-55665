const mongoose = require('mongoose');
const CONFIG = require('../config/constans.js');

module.exports = {
    connection: null,
    connect: () => {
        //if (this.connection) return this.connection;
        return mongoose.connect(CONFIG.DB).then(connection => {
            this.connection = connection;
            console.log('Conexion a DB exitosa');
        }).catch(err => console.log(err))
    }
}