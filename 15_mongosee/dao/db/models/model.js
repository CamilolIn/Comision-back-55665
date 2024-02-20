const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum:['Hogar', 'Cocina', 'Higiene']
    },
    stock: {
        type: Number,
        default: 10
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;