const express=require('express');
const app=express();

const db=require('../db');

//body parser is used to convert the data sent from client in any form like in json object text etc to our required form. It is a middle
// ware library of express js which extract the data from the body of the html document. 
// body-parser stores the data in req.body which can be use whenever needed
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //here app.use is used so express can use the body-parser

// Importing the person file in which we defined the schema of the data and exported the model
const person=require('./model/person');

app.get('/',function(req,res){
    res.send('Welcome to my Hotel! 😊. How can we help you?')
})

// post route to store the data
app.post('/person',async(req,res)=>{
   try {

    // assuming the data is recieved from the body parser we are saving the data in the data variable
    const data=req.body;

    // here we are creating an instance or new person varible from the model we created in person.js and passing the data according to 
    // schema
    const newPerson=new person(data);

    // here we are saving the person data to the database
    const response= await newPerson.save();
    console.log('data saved',response);
    res.status(200).json(response);

   } catch (error) {
    console.log(error);
    res.status(500).json({error:'Internal server error'})
    
   } 

   // writing get method to fetch data of the person from the database
   
   app.get('/person',async (req,res)=>{
    try{
        const data= await person.find();
        console.log('data fetched')
        res.status(200).json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error:'Internal server error'})
    }
   })
   
})
app.listen(3000,()=>{
    console.log("server is active and listening on port 3000");
});