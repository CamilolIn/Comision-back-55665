const express = require('express')

const app = express()
const cookiesParser = require('cookie-parser')
const session = require('express-session')
var FileStore = require('session-file-store')(session);
const MongoStore = require('connect-mongo');

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookiesParser('coderS3cr3tO'))
app.use(express.static(__dirname+"/public"))
var fileStoreOptions = {
  path:'./sessions',
  ttl : 100,
};
app.use(session({
  secret:'secretCoder',
  resave:true,
  saveUninitialized: true
}))

// app.use(session({
//   store: MongoStore.create({
//     mongoUrl: 'mongodb+srv://coder:123456ca@clustercodermongo.m5px3pd.mongodb.net/codermongodb',
//     ttl: 14 * 24 * 60 * 60 // = 14 days. Default
//   }),
//   secret:'secretCoder',
//   resave:true,
//   saveUninitialized: true
// }))

function auth(req, res, next){
  if(req.session.user === 'diego' && req.session.admin){
    return next()
  }
  return res.status(401).send('Error en la autenticacion')
}

app.get('/sessionSet', (req, res)=>{

 req.session.user = 'username'
 req.session.admin = true

 res.send('Ususerio Logueado')
})

app.get('/sessionGet', (req, res)=>{

 
  res.send(req.session)
 })


app.get('/login', (req, res)=>{

   let {username, password} = req.query
   console.log(username)
  if(username !== 'diego' || password!=='diegopass'){
    return res.send('Login failed')
  }
  req.session.user = username
  req.session.admin = true

  res.send('Ususerio Logueado')
})

app.get('/privado',  auth, (req, res)=>{
    res.send('Si estas viendo esto es porque ya te logueaste')
})

app.get('/logout', (req, res)=>{
  req.session.destroy( err => {
    if(err) res.send('Failed logout')
    res.send('logout ok')
  } )
})




app.get('/setCookie', (req, res)=>{
  res.cookie('CoderCookie', {user:'camilo@gmail.com'}, {maxAge:5000, signed:true}).send('Cookie creada!')
  // res.cookie('CoderCookie', {user:'camilo@gmail.com'}, {maxAge:10000}).send('Cookie creada!')
})

app.get('/getCookie', (req, res)=>{
  // res.send(req.signedCookies)
  res.send(req.signedCookies)
})

app.get('/formulario', (req, res)=>{
  res.sendFile(__dirname+'/public/index.html')
})

app.get('/deleteCookie', (req, res)=>{
  res.clearCookie('CoderCookie').send('Cookie fue eliminada')
})

app.post('/createCookies', (req, res)=>{
  console.log('re ', req.body)
  res.cookie('CoderCookie', {user:req.body.correo}, {maxAge:10000, signed:true}).send('Cookie creada!')
  // res.cookie('CoderCookie', {user:'camilo@gmail.com'}, {maxAge:10000}).send('Cookie creada!')
})


app.listen(8080, ()=>{
  console.log('Server ok !!')
})