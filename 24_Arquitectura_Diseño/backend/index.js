const express = require('express')
const cors = require('cors')
const MongoSingleton = require('./db')

const app = express()


app.use(cors())

app.get('/', (req, res)=>{
  res.send({massage: 'Entry pont', data: 'Hola Mundo'})
})

app.get('/home', (req, res)=>{
  res.send({massage: 'Entry pont', data: 'HOLA SOY UN HOME'})
})

app.listen(8080, ()=>{
  console.log('Server ok!!')
  MongoSingleton.getInstance()
  MongoSingleton.getInstance()
})