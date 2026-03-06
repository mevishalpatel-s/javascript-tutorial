// Primitive Datatype.

// integer datatype.
let number = 23

// string dtatype.
let name = "Vishal"

// boolean datatype.
let boolean = true

// null datatype.
let vishal = null

// undefined datatype.
// const a;    -> it is not allowed.
let college;

// define bigint datatype.
let bignumber = 12344567897654n

// print all of the variables.
console.log(number)
console.log(name)
console.log(boolean)
console.log(vishal)
console.log(college)
console.log(bignumber)

// print all the variables inn the table form.
console.table([number, name, boolean, vishal, college, bignumber])

// print type of all the variables.
console.log(typeof number)
console.log(typeof name)
console.log(typeof boolean)
console.log(typeof vishal)
console.log(typeof college)
console.log(typeof bignumber)

// print type of all variables in a table form.
console.table([typeof number, typeof name, typeof boolean, typeof vishal, typeof bignumber, typeof college]);


// Symbol Datatype.

const id = Symbol('123')
const newId = Symbol('123')

console.log(id);
console.log(typeof id);

console.log(newId);
console.log(typeof newId)

console.log(id == newId);


// =================================================================================================================


// Non-Premitive datatype(Reference datatype).

// Array

const names = ["Vishal", "Aman", "Priya"]
console.log(name);
console.log(name[2]);
console.log(typeof name);

// Object 

let myObject = {
    name : "Vishal",
    age : 22,
    class: 'B.Sc.',
}

console.log(myObject)
console.log(typeof myObject)


// To print a perticular value.
console.log(myObject.name)
// OR
console.log(myObject[name]);


// Function

const myFunction = function(){
    console.log("Hello World!");
}

console.log(myFunction)
console.log( typeof myFunction)

