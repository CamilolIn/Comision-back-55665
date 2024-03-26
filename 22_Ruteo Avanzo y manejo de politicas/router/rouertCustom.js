const {Router} = require('express')


class RouterCustom{
  constructor(){
    this.router = Router(),
    this.init()
  }

  getRouter(){
    return this.router
  }
  init(){}

  get(path, ...callBacks){
    this.router.get(path, this.generateCustomResponse, this.applyCallbaks(callBacks)) // get('/user, auth, middl2, ()=>{})
  }
  applyCallbaks(callBacks){
    return callBacks.map(cb => async(...params)=>{
      try{
        await cb.apply(this, params)
      }catch(err){
        params[1].status(500).send(err)
      }
    })
  }
  generateCustomResponse(req, res, next){
    res.sendSuccess = payload => res.send({status: "Success", payload})
    next()
  }
  
}


module.exports = RouterCustom