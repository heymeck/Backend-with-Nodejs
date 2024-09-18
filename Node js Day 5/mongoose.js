const express=require('express');
const app=express();
const db=require('../db');
app.get('/',function(req,res){
    res.send('Welcome to my Hotel! 😊. How can we help you?')
})
app.listen(3000,()=>{
    console.log("server is active and listening on port 3000");
});