const express = require('express')

const { Router  } = express

const router = new Router()

router.get('/', (req, res)=> {
  res.send('Hola mundo soy Productos')
})

router.get('/productId', (req, res)=> {
  res.send('Hola mundo soy prodoctos por su ID')
})


module.exports = router