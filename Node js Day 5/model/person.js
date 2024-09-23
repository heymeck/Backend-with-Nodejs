
// Here we are defining the schema of database to stored the data of person


// first we will import the driver mongoose
const mongoose=require('mongoose');

// here we are defining the schema.
const personSchema= new  mongoose.Schema({
    name:{
        type:String,  // this is the type of the variable required
        required:true  // the required  true marks the field to be filled mandotory
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','manager','waiter'],  // the enum function allows only declared objects to be filled in the field no other object
                                            // can be fill in place of declared object in the work 
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true  // the unique property of mongoose allows the field to be filld must be unique 
    },
    address:{
        type: String,
    },
    salary:{
        type:Number,
        required:true
    }
})

// create person model
const person=mongoose.model('person',personSchema);

// here we are exporting the model created to the mongoose.js file
module.exports=person;
