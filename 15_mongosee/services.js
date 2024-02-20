const Product = require('./model');

function listall(req, res) {
    Product.find({})
        .then(products => {
            if(products.length) return res.status(200).send({products})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
  console.log(req.body)
    let product = new Product(req.body);
    product.save()
        .then(product => 
            res.status(201).send({product})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'Not Found'});
    let products = req.body.products;
    return res.status(200).send({products});
}

function update(req, res) {
  

  let {uid} = req.params
  let prReplace = req.body
  console.log(prReplace)

  console.log(uid)
  Product.findOneAndUpdate({_id:uid}, prReplace).then(product => {
    console.log(product)
    res.send({product, msg:'Update Product'})
}).catch(err => res.status(500).send({err}))
  
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.products) return res.status(404).send({message: 'Not Found'});
    req.body.products[0].remove()
        .then(product => {
            res.status(200).send({message:'Product removed', product})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Product.find(query).then(products => {
        if(!products.length) return next();
        req.body.products = products;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}