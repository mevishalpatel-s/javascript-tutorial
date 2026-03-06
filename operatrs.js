// Operators are used to perform some operatons in data.

// There are multiple type of operators.

// ============================= 1. Arithemetical Operators. ================================================

let a = 5;
let b = 2;

console.log("a = 5 & b = 2")
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

// Some special arithmetical operators.
console.log("a % b = ", a % b);      // the reminder is output.
console.log("a ** b = ", a ** b);    // use for "to the power" like, 2**3 means 2 to the power 3 = 2*2*2 = 8
// Increment arithemeticsal operator.
let score = 100
score++;
console.log(score)
console.log(score++)   //Pre increment, Here it print the value first then change the value.
console.log(++score)   //Pre increment, Here it change the value first and then print the value.

// Decrement arithemen=tical operator.
score--;
console.log(score);
console.log(score--);  // Post decrement, Here it print the value first then change the value.
console.log(--score);  //Pre decrement, Here it change the value first and then print the value. 

// ==================================== 2. Assignment Operator =============================================

let x = 5;
console.log("x = 5")

console.log("x =", x += 1);   // x = x + 1
console.log("x =", x -= 1);   // x = x - 1
console.log("x =", x *= 1);   // x = x * 1
console.log("x =", x %= 1);   // x = x % 1
console.log("x =", x **= 2);  // x = x ** 1


// =================================== 3. Comparision Operator ===============================================

console.log("a = 5 & b = 2")
console.log("a == b: ", a == b);
console.log("a === b: ", a === b);  // use for strict check. 
console.log("a != b: ", a != b);
console.log("a !== b: ", a !== b);  // use for strict check. 
console.log("a > b: ", a > b);
console.log("a >= b: ", a >= b);
console.log("a < b: ", a < b);
console.log("a <= b: ", a <= b);


// =================================== 4. Logical Operator ====================================================

console.log("a = 5 & b = 2")
// Logical AND "&&" if both values are true the output is true otherwise the output is false.
console.log(a > b && b == a);  //False

// Logical OR "||", If atleast one condition is true then the output is true.
console.log(a > b || b == a);  // True

// Logical NOT "!", It is use to convert the output is out is "True" it makes it "False", If "false" then make is "True"
console.log(!(a == b));   // the output is "False" beacouse 5 is not equal to 2 but, logical NOT convert it into "True".
