// Variable rules:

// 1. "a" != "A"
// 2. name123, name$, name_, first-name ---> This kind variables names are allowed only. not this 1name. 
// 3. You can not use reserved variable name like, console, delete, do, true, etc.


// best practicce of define variable name is userName.  "u" of user is small and the second word Name where "N" is capital.

const classId = 1012
// once it defines then you can never change it.

var studentName = "Vishal Singh"
// Not usable for now beacuse it not containe block scope {} and functonal scope.

let fatherName = "Maansingh"
// Todays we use this variable for define any value.

console.log(classId) 
console.log(studentName)
console.log(fatherName);
// console.log use to print any values.

console.table([classId, studentName, fatherName]);
// It use to print multiple values in a table forms.


