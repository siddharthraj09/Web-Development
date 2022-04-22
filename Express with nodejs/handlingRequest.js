const { response } = require('express');
const express = require('express');
const app =express()

app.get("/",function(req,res){
    response.send("<h1> Hello World  <h1/>")
})

app.listen(3000,function(){
    console.log("server listening on port 3000");
})