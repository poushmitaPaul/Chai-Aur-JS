// Primitive - (Call By Value) //

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const outsideTemp = null
let userEmail;  // undefined
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);  // false
const bigNumber = 35645465769879898n  //automatically set as bigInt for n




// JavaScript is a Dynamically typed language, because data type will automatically assigned at the time of compilation or code execution. (just in time compilation language) //




// Non Primitive - (Call By Refference) //

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let objct = {
    name:"riya",
    age:22
}
const myFunc = function(){
    console.log("hello");
}

console.log(typeof heros);

// In Non-Primitive dataType, all are object(dataType) and functions are Object Function(dataType), //

// link --> https://262.ecma-internatinoal.org/5.1/#sec-11.4.3