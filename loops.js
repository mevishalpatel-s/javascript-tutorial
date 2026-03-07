// ===================================== Loops in JavaScript =========================================================
// Loops are used to execute a piece of code again and again.

// =============================================== 1. for loop.

// to print 10 times "Vishal" by usng for loop.

for (let i = 1; i <= 10; i++){
        console.log("Vishal");        
}

// print 1 to 10 number by using for loop.

for (let i = 0; i<=10; i++){
    console.log(i);
}

// print even number between 1 to 50 by using for loop.

let even = 0
for (let i = 1; i <=5; i++){
    even = even + i
    console.log("even", even)
}

// ================================================== 2. while loop.

// to print 10 times "Vishal" by usng while loop.
let i = 1;
while (i <= 10){
    console.log("Vishal")
    i++;
}


// print number 1 to 10 by using while loop.
let a = 0;
while(a <= 10){
    console.log(a)
    a++;
}

// to print even number between 1 to 50 by using while loops.
let b = 1;
 while(b <=50){
    console.log(b)
    b++;
    b = b/2
 }

// =============================================== 3. do-while loops.

// print number 1 to 20 by using do-while loop.
let c = 1;
do {
    console.log(c)
    c++;
} while(c <=20);


// ============================================== 4. for-of loop.

let str5 = "JavaScript"
for(let i of str5){
    //interator -> character
    console.log(i);
}

// ============================================= 5. for-in loop.

let student = {
    name: "Vishal",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let i in student){
    console.log(i);
    //to print value.
    
}


