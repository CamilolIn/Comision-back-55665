const Router = require('./rouertCustom')

class UserRouter extends Router{
  init(){
    this.get('/', (req, res)=>{
      // res.send('Hola mundo')
      res.sendSuccess("Hola mundooo")
    })
  }
}



module.exports = UserRouter