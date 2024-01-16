const express = require('express')

const { Router  } = express

const router = new Router()

let users = []

router.get('/', (req, res)=> {
  res.json({data: users})
})

module.exports = router