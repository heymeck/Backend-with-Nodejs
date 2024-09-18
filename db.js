
// first we will import database drive in this case mongoose is our database driver
const mongoose=require('mongoose');

// define mongodb URL: here we will define the url of our database
const mongoURL='mongodb://localhost:27017/hotels'

//  Setting up mongodb connection: here we will set mongodb connection and some parameters
mongoose.connect(mongoURL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
})

// here we will declare object to trigger the connection 
// Get the default connection
// Mongoose maintain a default connection object representing the mongodb connection
const db= mongoose.connection;


// adding event listeners for mongodb

db.on('connected',()=>{
    console.log("Connected to mongodb server")
});

db.on('error',(err)=>{
    console.error('Mongodb connection error',err)
});

db.on('disconnected',()=>{
    console.log('Disconnected to mongodb server')
});

// Now let declare the module to export from here
module.exports=db;