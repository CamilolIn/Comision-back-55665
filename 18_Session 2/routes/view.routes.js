const express = require('express')
const {Router} = express

const router = new Router()

function auth(req, res, next){
  let suma = 78
  if(suma==10){
    next()
  }else{
    res.send('No autorizado')
  }
}

router.get('/login-view', (req, res)=>{
  res.render('login', {})
})
router.get('/register-view', (req, res)=>{
  res.render('register', {})
})
router.get('/perfil-view', auth, (req, res)=>{
  res.render('perfil', {})
})


module.exports = router