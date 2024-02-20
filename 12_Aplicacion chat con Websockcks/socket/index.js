const http = require('http')

const {Server} = require('socket.io')
const io = new Server(server)



io.on('connection', (socket)=>{
  console.log('New user conected')
  socket.emit('wellcome', 'Hola cliente, bienvenido')


  socket.on('new-message', (data)=>{
    console.log(data)
    messages.push(data)
    io.sockets.emit('messages-all', messages)
    ModeloChat.create({
      user : data.username,
      message: data.message
    })
    //Funcion que guarde en la base de datos
  })
})

module.exports = io