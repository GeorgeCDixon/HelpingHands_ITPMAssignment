const product_Schema = require('../model/products');
const express = require('express');
const router = express.Router();

router.route('/addAProduct').post((req, res, next)=>{
  
    let product = new product_Schema({
        productName : req.body.productName,
        category : req.body.category,
        description : req.body.description,
        price : req.body.price,
        location : req.body.Location

   })

   product.save()
   .then(loan =>{
      res.status(200).send({status :"Product Added"});
   }).catch((err) => {
       console.log(err);
       res.status(400).send({status: "Error with Updating Data",error: err.message});
   });
});


router.route('/getAllProducts').get((req,res) => {
cus_Schema.find()
.then(cus_Schema => res.json(product_Schema))
.catch(err => res.status(400).json('Error: '+err));
});


router.route('/getAllProductsForName/:name').get((req,res) => {

const name = req.params.name;
product_Schema.find({name : { $regex: ".*" + name + ".*"} })
.then(cus_Schema => res.json(cus_Schema))
.catch(err => res.status(400).json('Error: '+err));
});


router.route("/deleteProduct/:id").delete(async (req, res) => {
   let id = req.params.id;
   cus_Schema.findByIdAndDelete(id)
   .then(() => {
       res.status(200).send({status :"Product Deleted"});
   }).catch((err) => {
       console.log(err);
       res.status(500).send({status: "Error with Deleting Data",error: err.message});
   });
});

router.route("/editProduct/:id").put(async (req, res) => {
const id = req.params.id;

const editProduct = {
    productName : req.body.productName,
    category : req.body.category,
    description : req.body.description,
    price : req.body.price,
    location : req.body.Location
}

product_Schema.findByIdAndUpdate(id,EditProduct)
.then(() => {
   res.status(200).send({status :"Product Edited"});
}).catch((err) => {
   console.log(err);
   res.status(500).send({status: "Error with Edit Data",error: err.message});
});
     
});


router.route("/accept/:id").put(async (req, res) => {
const id = req.params.id;
const EditCus = {
   status : "Accept",
}
cus_Schema.findByIdAndUpdate(id,EditCus)
.then(() => {
   res.status(200).send({status :"Customer Accept"});
}).catch((err) => {
   console.log(err);
   res.status(500).send({status: "Error with Edit Data",error: err.message});
});      
});

router.route("/reject/:id").put(async (req, res) => {
const id = req.params.id;
const EditCus = {
   status : "Reject",
}
cus_Schema.findByIdAndUpdate(id,EditCus)
.then(() => {
   res.status(200).send({status :"Customer Reject"});
}).catch((err) => {
   console.log(err);
   res.status(500).send({status: "Error with Edit Data",error: err.message});
});      
});

module.exports = router;