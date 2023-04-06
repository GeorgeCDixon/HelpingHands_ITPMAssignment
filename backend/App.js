const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");



const app= express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));


mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://DixonC:Ghnb$$5270@cluster0.6nt3mnn.mongodb.net/helpingHandDB",{useNewUrlParser:true});




app.listen(3000, function(){
    console.log("Server running on port");
});