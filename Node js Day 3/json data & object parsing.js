
//  here we are converting json data to object 
const json='{"name":"Hemant", "age":34, "city":"new york" }'; // here is the json data passed as string
const ConvertingToObject =JSON.parse(json);             // here we are converting json data to object to use in code.
console.log(ConvertingToObject);
console.log(ConvertingToObject.age);

// here we are converting object to json data
let obj={name:"Arvind",DOB:"14th Aug",Hometown:"Loni"}; // here we are writing an object
let converintToJson=JSON.stringify(obj);        // here we are using JSON.strigify to convert object to json string.
console.log(converintToJson);
console.log(typeof converintToJson)


// practice set
let data='{"product":"Toothpaste","Price":45,"dimension":"30x12x34"}'
let convert=JSON.parse(data);
console.log(convert);

let object={
    thing:"car",
    Model:2029,
    Brand:"Hyundai"
}
let convert2=JSON.stringify(object);
console.log(convert2);

