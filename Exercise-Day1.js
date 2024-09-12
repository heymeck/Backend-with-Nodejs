// Problem 1:- Conditional statements

/*  You run a movie theatre, and you want to offer discounts based on a person's age. Write a js program 
    that ask the userfor their age and then display a message :
    if the age is less than 18 display "You get a 20% discount"
    if the age is 18 and 65 (inclusive), display. "Normal ticket price applies"
    if the age is 65 or older, display. "You get a 30% discount" */

let prompt= require('prompt-sync')();
    // var age = prompt("Enter your age ");

    // if(isNaN(age)){
    //     throw Error("You must enter a number ")
    // }else{
    // if(age<18){
    //     console.log("You get a 20% discount");
    // }else if(age>=18 && age<=65){
    //     console.log("Normal ticket price applies");
    // }else if(age>65){
    //     console.log("You get a 30% discount");
    // }
    // }

// Problem 2:- Variables (var and const)

/* Create a javascript program to calculate the area of rectangle. Ask the user for the length and width of the rectangle and store
   them in variables. Calculate and display the area using the formula area= width * length   */

//    const width=prompt("Enter the width of the rectangle\n");
//    var length=prompt(`Enter the length of the rectangle\n`);
//    console.log("The area of rectangle is "+width+" x "+length,"",width*length);

// Problem 3:- Objects and properties

/*  You are creating a online store. Define a javascript object name product with the following properties
    -name(string)
    -price(number)
    -instock(boolean)
    create at least 3 product using your object template and display their detail using console.log   */

    // function product(name,price,instock){
    //     this.name=name;
    //     this.cost=price;
    //     this.instock=instock
    // }

    // let Toothpaste=new product("Colgate",50,true);
    // console.log(Toothpaste)
    // var soap=new product("lifebuoy",45,false);
    // console.log(soap)
    // var soap =new product("savlon","45",true)
    // console.log(soap);

let guest_list = ["Arvind","Sourav","Rahul","Love","Dinesh"];

let name=prompt('Enter your name ');
var found=null;
function checkguest(name){
    for(let i=0;i<guest_list.length;i++){
        if(name==guest_list[i]){
            found=true;
            break;
        }
    }
}
checkguest(name);
if(found==true){
    console.log("You are the guest of the party")
}else{
    console.log("You are not the guest of the party")
}