console.log("My first server on node")

//  one way to declare functions
function add (a,b){
    return a+b;
}

let subtract=function(a,b){
    return a-b;
}

// arrow functions
var multiple=(a,b)=>{return a*b;}

let result=multiple(4,12);
console.log(result);
(function print(){console.log("Hello world! My first line of code ")})();

// callback functions
function callback(){
    console.log("The sum is given above and successfully completed");
}

let sum = function(a,b,callback){
    var result=a+b;
    console.log("result is: ",result);
    callback();
}

// here I call the main function which is calling a function inside it

sum(2,45,callback);