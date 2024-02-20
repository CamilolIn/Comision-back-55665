const mongoose = require('mongoose')
const Pizza = require('./pizza')

const connect = async () => {
  return mongoose.connect('mongodb+srv://camilo123456:123456ca@cluster0.lk03pan.mongodb.net/coder-agregaciones')
  .then(async ()=> {

    console.log('Conexion existosa a DB')

    // let order = await Pizza.aggregate([
    //   {
    //     $match : {size: 'medium'}
    //   },
    //   {
    //     $group : {_id: '$name', totalQly: {$sum: '$quantity'}}
    //   },
    //   {
    //     $sort : {totalQly:-1}
    //   },
    //   {
    //     $group : {_id: 1, orders: {$push: '$$ROOT'}}
    //   },
    //   {
    //     $project : {_id: 0, orders: '$orders'}
    //   },
    //   {
    //     $merge: {'into': 'reports' }
    //   }
    // ])

    // console.log(JSON.stringify(order, null, '\t') )
    let res = await Pizza.paginate({size: 'medium'}, {limit: 4, page: req.query.page})
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}

connect()