const express = require('express')
const userRouter = require('./routes/user.routes')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const Database = require('./db/db')
const initializePassport = require('./config/passport')



const app = express()

app.use(session({
  store: MongoStore.create({
    mongoUrl:'mongodb+srv://camilo123456:123456ca@cluster0.lk03pan.mongodb.net/coderEcommerce'
  }),
  secret:'secretCoder',
  resave: true,
  saveUninitialized: true
}))

app.use(express.json())

initializePassport()
app.use(passport.initialize())
app.use(passport.session())
app.use('/user', userRouter)


app.listen(8080, ()=>{
  console.log('Server ok')
  Database.connect()
})