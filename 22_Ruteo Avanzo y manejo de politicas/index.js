const express = require('express')
const router = require('./router/index')
const UserCustom = require('./router/user')


const app = express()
let userRouter = new UserCustom()
app.use('/user', userRouter.getRouter())
app.use('/', router)


app.listen(8080, ()=>{
  console.log('Server ok')
})