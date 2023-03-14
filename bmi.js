//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var h = req.body.height;
    var w = req.body.weight;

    var bmi = Number(w) / Number(h);

    res.send("The BMI of given data is: " + bmi);
})

app.listen(3000, function(){
    console.log("Server started @port 3000");
})