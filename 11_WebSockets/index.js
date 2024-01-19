const express = require('express')
const homeRouter = require('./routes/home.route')
const handlebars = require('express-handlebars')
const app = express()
const http = require('http');
const server = http.createServer(app);

//Socket
const { Server } = require("socket.io");
const io = new Server(server);

//PORT
let PORT = 8080 || process.env.PORT


//Public
app.use(express.static(__dirname+'/public'))

//Views
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

let messages = []

//Inicializar el Socket en el servido
io.on('connection', (socket)=>{
  console.log('User conectado')
  //socket.emit('mesagge', 'Hola Cliente, soy el back')
  socket.emit('messages', messages)
  socket.on('new-message', (data)=>{
    console.log(data)
    messages.push(data)
    io.sockets.emit('messages', messages)
  })
})

//Routes
app.use('/home', homeRouter)



server.listen(PORT, ()=>{
  console.log('Server running on port 8080')
})