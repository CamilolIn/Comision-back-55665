const express = require('express')
const router = require('./routes/index')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const {initializePassport, passportCall} = require('./config/passport')



const app = express()

app.use(cookieParser())

app.use(express.json())
app.use(passport.initialize())
initializePassport()
app.use('/auth', router)



app.listen(8080, ()=>{
  console.log('Server ok')
})