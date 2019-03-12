var express = require("express");
var mySql = require("mysql");

var app = express();

app.listen(8081, function(){
    console.log("Servidor corriendo en http://localhost:8081");
});

app.use("/js", function(request, response){
    response.sendFile(__dirname + "/js/main.js");
});

app.use("/", function(request, response){
    response.sendFile(__dirname +  "/index.html");
});

