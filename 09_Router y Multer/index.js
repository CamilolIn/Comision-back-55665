const express = require('express')

const app= express()
const routesProdcucts = require('./routes/products')
const routesusers = require('./routes/usuarios')
const routesPets = require('./routes/pets')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use( function(req, res, next){
  console.log("Time: ", Date.now())
  next()
}  )


app.use('/static', express.static(__dirname + '/public'))

app.use('/api/products', routesProdcucts)
app.use('/api/carts', routesusers)
app.use('/pets', routesPets)

app.listen(8080, ()=>{
  console.log('Server is runnig on port 8080')
})