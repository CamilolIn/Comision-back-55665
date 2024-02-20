const Product = require('../models/model')



class ProductManagerMongo{

  async addProdcut(pr){
    try{
      await Product.create(pr)
      return 'Producto creado'
    }catch(err){
      return 'Error: ' + err
    }
    
  }
}
 module.exports = ProductManagerMongo