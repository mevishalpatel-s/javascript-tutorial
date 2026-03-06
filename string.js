// String 

const name = 'vishal '
const repo = 40

//older way to add the strings.
console.log(name + repo + ' singh');  

// how to declare string in proper form.
const newName = new String("Vishal")
console.log(newName);

// Key-Value Pairs.
// key:value
//   0:"V"
//   1:"i"
//   2:"s"
//   3:"h"
//   4:"i"
//   5:"l"

// to find the value.
console.log(newName[2]);

// ======================================= String Prototype ======================================

// there are multiple string prototypes in JavaScript.

// 1. To find the length of string.

console.log(newName.length);

// 2. To convert string in UPPERCASE.

console.log(newName.upperCase());

