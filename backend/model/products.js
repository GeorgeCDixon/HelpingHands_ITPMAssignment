const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({

    productName: {type: String,required: true},
    category: {type: String,required: true},
    description: {type: String,required: true},
    price: {type: String,required: true},
    location : {type: String,required: true},
    pictures: {type: String,required: true},
    
}, {
timestamps: true
});
const product_Schema = mongoose.model('product', product);
module.exports = product_Schema;