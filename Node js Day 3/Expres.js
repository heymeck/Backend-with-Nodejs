const express = require('express')
const app = express()

// get method is used to show data to frontend, Data which is already stored in database or server.

app.get('/', function (req, res) {
  res.send('Hello Welcome to my Hotel. How can I help you?')
})

app.get('/chicken',(req,res)=>{
    res.send('Sure sir! I would love to serve you.')
})

app.get('/idli',(req,res)=>{
  let idli={
    name:"Rava idli",
    chutney:true,
    sambhar:true,
    wada:false
  }
  res.send(idli)
})

// Post method is used to take data from frontend or in the form of a form to save the details in the database.

app.post('/item',(req,res)=>{
  res.send("Data is saved")
})

app.listen(3000,()=>{
  console.log("listion on port 3000")
})
console.log("Hii hey ")