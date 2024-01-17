const express = require('express')

const {Router} = express

const router = new Router()

router.get('/', (req, res)=>{
  res.render('index',  {
    name: 'Marta',
    lastName: 'Garcia',
    age: '3548571',
    email: "marta.garcia@gmail.com",
    phone: '1187654321'
 })
})

module.exports = router