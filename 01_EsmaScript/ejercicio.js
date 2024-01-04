class TicketManager{
  constructor(){
    this.eventos = ['Concierto musica Clasica']
  }

  getEventos(){
    return this.eventos
  }
}

let ticket1 = new TicketManager()

// console.log(ticket1.agragarEvento({
//   nombre : 'concierto de Rock',
//   lugar : 'Estadio',
//   precio : 5000,
//   capacidad : '100',
//   fecha : new Date(),
// }))

// console.log(new Date())

function suma(a, b = 10){
  return a + b
}

console.log(suma(4, 6))

let id = Math.random()
console.log(id)