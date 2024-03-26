const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const MongoStore = require('connect-mongo')
const handlebars = require('express-handlebars')

const ViewRoutes = require('./routes/view.routes')
const AuthRoutes = require('./routes/auth.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

app.use(session({
  store: MongoStore.create({
    mongoUrl:'mongodb+srv://camilo123456:123456ca@cluster0.lk03pan.mongodb.net/ecommerce',
    ttl:10
  }) ,
  // store:new FileStore({path:'./session', ttl:10}),
  secret:'secretCoder',
  resave:true,
  saveUninitialized:true
}))

app.get('/sessionSet', (req, res)=>{
  req.session.user = 'Camilo',
  req.session.age = 78

  res.send('Session create')
})

app.get('/logout', (req, res)=>{
  req.session.destroy(err => {
    if(err) res.send('Failed logout')
    res.send('Logout ok!!')
  })
})

app.get('/sessionGet', (req, res)=>{
  res.send(req.session)
})

app.use('/view', ViewRoutes)
app.use('/auth', AuthRoutes)


app.listen(8080, ()=>{
  console.log('Server Ok')
})