const express = require('express')

const app = express()
const handlebars = require('express-handlebars')

const routerUser = require('./routes/users.router')

app.use('/users', routerUser)

app.use(express.static(__dirname+'/public'))

app.engine('handlebars', handlebars.engine() )
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars' )

let users = [
  {
    name: 'Hernan',
    lastName: 'Rojas',
    age: '27',
    email: "horojas96@gmail.com",
    phone: '1150358772'
 },
 {
    name: 'Juan',
    lastName: 'Gonzalez',
    age: '28',
    email: "juan.gonzalez@gmail.com",
    phone: '1184785236'
 },
 {
    name: 'Jose',
    lastName: 'Perez',
    age: '29',
    email: "jose.perez@gmail.com",
    phone: '1187523698'
 },
 {
    name: 'Pedro',
    lastName: 'Rodriguez',
    age: '30',
    email: "pedro.rodriguez@gmail.com",
    phone: '1187654321'
 },
 {
    name: 'Marta',
    lastName: 'Garcia',
    age: '31',
    email: "marta.garcia@gmail.com",
    phone: '1187654321'
 }
]



app.get('/', (req, res)=>{
  res.render('index',users[Math.floor(Math.random() * users.length)])
})

let arrayPr = [
  {
    title:'tv',
    price:545
  },
  {
    title:'Radio',
    price:242
  },
  {
    title:'lavadora',
    price:57
  }
]
app.get('/testHand', (req, res)=>{
  let user = {
    name:'Hilda',
    lastName:'Martinez',
    role:'user'
  }
  res.render('users', {
    user:user,
    IsAdmin: user.role === 'admin',
    products: arrayPr // true // false
  })
})

app.listen(8080, ()=>{
  console.log('Server running on port 8080')
})