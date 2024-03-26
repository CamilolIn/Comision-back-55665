import { Router } from "express";
import jwt from 'jsonwebtoken'

const routerJWT = new Router()

routerJWT.get('/login', (req, res)=>{
  // Buscar en mi Base de datos
  let user = {
    name:'Camilo',
    lastName: 'Lindarte',
    age: 45
  }
  let token =  jwt.sign(user, 'misecretocoderjwt', {})
  res.send({token, message:'Usuario logueado'})
})

routerJWT.get('/home', (req, res)=>{
  //header
  let token = req.headers.authorization.split(" ")[1]
  console.log(token) // beader gdgfhhgh
  jwt.verify(token, 'misecretocoderjwt', (err, user)=>{
    if(err){
      return res.send('userio no autorizado')
    }
    res.send('BIENVENIDO AL HOME')
  })

})


export {routerJWT}