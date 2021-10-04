const express = require("express");
const controleLinha = express();


controleLinha.get("/", function (req, res){
    res.send("");
})







controleLinha.listen(5441, function(){
    console.log("Servidor Rodando!");
});