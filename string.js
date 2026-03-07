//======================================= Strings ============================================================

// String is a sequence of charecters used to represents text.

//Create string:
let str = "Vishal"
console.log(str)

// String length:
console.log(str.length);

// String indices/Index:
console.log(str[2]);


//===================================== Template Literals ===================================================

// A way to have embadded expresions in string.

templateLiterals = `this is a template literals.`

// String Interpolation: use to create strings by doing substitution of "Placeholder".
//Syntax: string text ${expression} string text.

let product = "Pen"
let price = 200

console.log(`This is a ${product} at the cost of ${price}.`)

//=================================== String methods ========================================================
// These are built-in function to manipulate a string.

//======================= For UpperCase.

let fruit = "Mango"
let newFruit = fruit.toUpperCase()

console.log(newFruit)

//====================== For LowerCase.

let veg = "TOMATO"
let newVeg = veg.toLowerCase()

console.log(newVeg);

// =================== For Remove Whitespaces from a string. 

let str1 = "      Vishal     123"
console.log(str1.trim());

// ================ str.slice(start, end?): return part of string but the end is not countable.

let username = "VishalSingh"
console.log(username.slice(0,6));

// ===============string1.concat(string2): use to join "string1" to "string2".

let string1 = "Vishal "
let string2 ="Singh"

console.log(string1.concat(string2));
console.log(string2.concat(string1));

//================ str.replace(searchValue, newValue).

let college = "Shibli"

console.log(college.replace("Sh", "G"));


//============== str.charArt(index): To find a index from string.

let name2 = "Aman"

console.log(name2.charAt(3));  // it's like console.log(name2[3]);









































// const name = 'vishal '
// const repo = 40

// //older way to add the strings.
// console.log(name + repo + ' singh');  

// // how to declare string in proper form.
// const newName = new String("Vishal")
// console.log(newName);

// // Key-Value Pairs.
// // key:value
// //   0:"V"
// //   1:"i"
// //   2:"s"
// //   3:"h"
// //   4:"i"
// //   5:"l"

// // to find the value.
// console.log(newName[2]);

// // ======================================= String Prototype ======================================

// // there are multiple string prototypes in JavaScript.

// // 1. To find the length of string.

// console.log(newName.length);

// // 2. To convert string in UPPERCASE.

// console.log(newName.upperCase());

