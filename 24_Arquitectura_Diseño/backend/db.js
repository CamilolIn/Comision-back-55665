const mongoose = require('mongoose')

class MongoSingleton{
  static #instance
  constructor(){
    mongoose.connect('mongodb+srv://camilo123456:123456ca@cluster0.lk03pan.mongodb.net/')
  }
  static getInstance(){
    if(this.#instance){
      console.log('Conexion ya existe')
      return this.#instance
    }
    this.#instance = new MongoSingleton()
    console.log('Db conectada')
    return this.#instance
  }
}


module.exports = MongoSingleton