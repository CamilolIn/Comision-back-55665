const express = require('express')

const { Router  } = express
const uuid4 = require('uuid4')

const router = new Router()


let pets = []

function mid1(req, res, next){
  req.data1 = 'un dato X'
  next()
}

function mid2(req, res, next){
  req.data2 = 'un dato2 X'
  next()
}

router.get('/',  mid1, mid2, (req, res)=> {
  console.log(req.data1)
  console.log(req.data2)
  res.json({data:pets})
})

router.post('/', (req, res)=> {
  let pet = req.body
  pet.id = uuid4()
  console.log(pet)
  pets.push(pet)
  // res.json({data:pet, message:'Mascota creada'})
  res.redirect('/pets')
  
})

module.exports = router