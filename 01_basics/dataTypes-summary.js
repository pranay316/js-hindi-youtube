//  Premitive
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId);

const bigNumber = 32456745634560845432234n


// Reference (Non premitive)
// Array, Objects, Functions

// Javascript is ynamically type language

const heros = ["shaktiman", "naagraj", "bhim"]  

let myObj = {
    name:"Pranay",
    age : 21,
}

const myFunction = function(){
    console.log("Hello world")
}
