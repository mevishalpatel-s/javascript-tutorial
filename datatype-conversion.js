// Here we are converting a datatype in another one.

// integer datatype.
let score = 23
stringScore= String(score);
console.log(stringScore);
console.log(typeof stringScore);

// Again converting string into integer.
intScore= Number(stringScore)
console.log(intScore);
console.log (typeof intScore);

// Rule:- 

/* let variable = "vishal" ;     -> First definne a variable.

convertVariable= Number(variable)    -> Then define another variable for conversion datatype by Using this syntax "with first latter capital" Number(for Integer), String, Boolean etc.
convertVariable= String(variable)
convertVariable= Boolean(variable)

console.log(convertVariable)        -> Finally print the second varaible.
console.log(typeof convertVariable);      -> Then check the datatype of second variable. */    

let name = "Vishal"
let classId = 1012

username = name + classId

console.log(username)
console.log(typeof username);

intUsername = Number(username)

console.log(intUsername)

// here the output is shows the type of intUsername is NaN(Not a Number).
console.log(typeof intUsername);

/* If we convert these datatype into integer, what is their typeof,

string -> NaN
boolean -> 1 or 0
Undefined -> NaN
null -> 0  */


let number = 100
negNumber = -(number)

console.log(negNumber)

// the output is -100 .