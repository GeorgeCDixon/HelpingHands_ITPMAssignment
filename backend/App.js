const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");


const app= express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));


mongoose.set("strictQuery", false);
mongoose.connect("#",{useNewUrlParser:true});




app.listen(3000, function(){
    console.log("Server running on port");
});