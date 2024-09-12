
const prompt = require('prompt-sync')();
var a=5,b=6;

let c=56;
var ans=a+b;
var nam="hemant";
console.log("the name of the student is",nam);
console.log(a+b+c);
console.log(typeof nam);

// array

var cars=["Hyundai","Maruti","volvo"];
console.log(cars);
cars.push("tesla");
console.log(cars);
cars.length;
console.log(cars.length);
console.log(cars[2]);
console.log(cars[0]);

// if else
var hour =10;
if(hour<=12){
    if(hour==12){
        console.log("Its noon time")
    }else{
        console.log("Its morning time");
    }
}else{
    console.log("Its Afternoon time")
}

//  For loop

var count =10;
for(var i=1;i<=count;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}

// objects
const person={
    name:"John",
    age: 23,
    Height: 5.3,
    colour:"black",
    is_studen: false,
    Hobbies:["Swimming","Running","Playing"]
};

console.log(person) // to print the whole data of the object


console.log(person.Hobbies); //  to print the single key value of the object.

for (const key in person) {
    console.log("\n")
    console.log(key) // to print the keys of the object
    console.log(person[key]) // to print the value of the key of the object.
}

// to print the first letter of the key of the object
console.log("\n")
for (const key in person){
    console.log(key[0])
}


// filter function
const ages=[34,21,15,47,28,4,8];
function checkage(ages){
    return ages>18;
}
const result=ages.filter(checkage);
console.log(result);

// node prompt package of npm
let ag=prompt("type your age\n");

if(ag>18){
    console.log(`You are an adult`)
}else{
    console.log("You are a minor")
}
