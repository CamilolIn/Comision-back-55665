const express = require('express');
const ProductController = require('./services');
const Product = require('./model');
const ProductManagerMongo = require('./dao/db/productMangerMongo.js/productManager.js');


const router = express.Router();
const productManager = new ProductManagerMongo()

router.post('/addProduct', async (req,  res) => {
      await productManager.addProdcut(req.body)
})



module.exports = router;