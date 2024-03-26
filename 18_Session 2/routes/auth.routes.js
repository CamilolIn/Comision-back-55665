const express = require('express')
const {Router} = express

const router = new Router()
let users = []

router.post('/register', (req, res)=>{
  let userNew = req.body
  console.log(userNew)
  userNew.id = Math.random()
  users.push(userNew)
  res.redirect('/view/login-view')
})

router.post('/login', (req, res)=>{
  let userlogin = req.body
  let userFound = users.find(u => {
    return u.user == userlogin.user && u.password == userlogin.password
  })
  if(userFound){
    req.session.user = userlogin.user
    req.session.password = userlogin.password

    res.redirect('/view/perfil-view')
    return
  }
  res.send('Usuario no regitrado')

})

router.get('/logout', (req, res)=>{
  req.session.destroy(err => {
    if(err) res.send('Failed logout')
    res.redirect('/view/login-view')
  })
})

router.get('/users', (req, res)=>{
  res.send(users)
})


module.exports = router