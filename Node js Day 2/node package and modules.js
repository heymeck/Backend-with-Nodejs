
// fs and os are built in modules of node js where fs creates a file and writes the message
// os gives info about the user and machine

var fs=require('fs');
var os= require('os');
var express =require('express');
var user=os.userInfo();


console.log(user);
fs.appendFile("greeting.txt","Hii"+user.username+"!\n",function(){console.log("File is written")});

// to know what and how to use os and fs module just type
console.log(fs);


// linking or importing other js file her using require     this whole code is related ot notes file
const notes=require("./notes");
var age=notes.age;
var addnum=notes.addnum;
console.log(age)
console.log(addnum(age,5));

// about lodash package of npm : it is use to deal with array
var lodash =require('lodash');
let data=["person","person",1,2,5,5,2,2,1,"person",3,9,6,2,8,8];
//here we are gonna use uniq function of lodash
var filter=lodash.uniq(data);
console.log(filter);



