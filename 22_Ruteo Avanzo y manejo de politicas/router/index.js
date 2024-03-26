const express = require('express')


const { Router } = express

const router = new Router()

// router.get('/test/:word', (req, res)=>{
//   res.send('Palabra ' + JSON.stringify(req.params) )
// })

router.param('word', (req, res, next, word)=>{
  req.word = 'soy la ' + word
  next()
})

router.get('/test/:word([a-zA-Z]+)', (req, res)=>{
  console.log(req.params)
  res.send('Palabra ' + req.word)
  // res.send('Palabra ' + JSON.stringify(req.params) )
})

router.get('*', (req, res)=>{
  res.status(404).send('RUTA NO ENCOTRADA')
})




module.exports = router