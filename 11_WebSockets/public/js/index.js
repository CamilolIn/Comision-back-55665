let socket = io()

socket.on('messages', (data)=>{
  render(data)
})

function render(data){
  const html = data.map(elem => {
        return (`
          <div>
            <strong> ${elem.author} </strong>
            <em> ${elem.text} </em>
          </div>
        `)
  }).join(' ')

  document.getElementById('caja').innerHTML = html
}

function addMessage(e){
  const mensaje = {
    author: document.getElementById('username').value, 
    text: document.getElementById('texto').value
  }
  console.log(mensaje)
  socket.emit('new-message', mensaje)
  return false
}

