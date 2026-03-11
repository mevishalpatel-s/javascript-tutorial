//=========================================== Array: collection of items.====================================================

let array1 = [1,2,3,4,5,6]
console.log(array1);

// to store the marks of students.

let marks = [98,90,80,65,78]
console.log(marks)
console.log(marks.length)
console.log(typeof marks);

// Students name.

let student = ["Vishal", "Aman", "Priya", "Ahmed"]
console.log(student)
console.log(student.length)

//========================== Array Indices/index ==========================================================

let array = [12, 34, 56, 78, 98]
console.log(array)
console.log(array[3]);

// ========================= to change any value of array =================================================

let b = [23, 40, 34, 59, 34, 54]
console.log(b)
console.log(b[3])
console.log(b[3] = 23);  // this syntax use for change the value.
console.log(b)

//====================== Looping on a Array =================================================================
// use to print all elements of Array.

//for loop =========================================================================
let c = [23, 40, 34, 59, 34, 54]
for (let i = 0; i < c.length; i++){
    console.log(c[i])
}

//for-of loop =======================================================================

for (let i of c){
    console.log(i)
}

let cities = ["Delhi", "Goa", "Mumbai", "Lucknow"]
for (city of cities){
    console.log(city)
}

// ================================ Araay methodes ============================================================================

// ================== 1. push()  ---- Use to add items in the end of an array.

let fruits = ["Banana", "Mango", "Apple"]
fruits.push("Orenge")   // - this syntax is use to add items in the array.
console.log(fruits)


//====================  2. pop() ---- Use to delete intems from the end of the array.

// fruits.pop() -- this syntax use to remove items from an array.


// ==================== 3. toString()  --- use to get an array into an string.

console.log(fruits.toString)


// =================== 4. toConcat()  --- Use to add arrays and get another a

let city = ["Lucknow", "Delhi", "Kanpur", "Noida"]
let country = ["India", "Pakistan", "China", "Afganistan"]

let newArr = city.concat(country)   //---use to concat the arrays.


// ================= 5. unShift() // --- use to add elements in start of the array.

fruits.unshift("Lichi")


// ================= 6. shift()  // --- use to remove element from the start.

fruits.shift()


// ================ 7. slice(startIndex, endIndex)  // --- return a piece of array.

fruits.slice(0, 2)


// =============== 8. splice(startIndex, delcount, newElement1, newElement2...)


let arr = [1, 2, 3, 4, 5, 6, 7]

arr.splice(2, 3, 100, 102)  // -- by usung this syntex we delete 3 items after 2 index means 4,5 and 6. And add two element 100, 101 on the 3rd index and 4th index.

// to add element.
arr.splice(2, 0, 100)   // -- 0 deletion after 2nd index and add an element after 2nd index.

// to delete items.
arr.splice(2, 3)    // --- delete three items after 2nd index

// to replace any item.
arr.splice(2, 1, 105)  // -- delete 3 index and replace it to 105.

//delete a piece of array.
arr.splice(4)  // --- after 4 index all the items will deleted.