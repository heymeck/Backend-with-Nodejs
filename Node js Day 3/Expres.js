const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/chicken',(req,res)=>{
    res.send('Sure sir! I would love to serve you.')
})

app.get('/idli',(req,res)=>{
  res.send('regret to inform sir we do not serve idli.')
})

app.listen(3000,()=>{
  console.log("listion on port 3000")
})
console.log("Hii hey ")