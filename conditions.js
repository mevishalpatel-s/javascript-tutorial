// Condition Statement: To implement some condition in the code.

// ================================ If statement =============================================================

// let age = 20;

// if(age > 18){
//     console.log("You can vote!")
// }

// if(age < 18){
//     console.log("You CANNOT vote!")
// }

// =============================== If-else Statement ============================================================


// if(age > 18){
//     console.log("You can vote!")
// }
// else{
//     console.log("You CANNOT vote!")
// }

// =============================== else-if statement ===============================================================

// let marks = 61;

// if (marks>90){
//     console.log("Grade A : Pass");
// }

// else if(marks>=80){
//     console.log("Grade B : Pass");
// }
// else if(marks>=70){
//     console.log("Grade C : Pass");
// }
// else if(marks>60){
//     console.log("Grade D : Pass");
// }
// else{
//     console.log("Grade F, Try next time again!");
// }

// ================================= Ternary Operators =================================================================

//Syntax: condition ? true output : false output

let age = 20;
let user = age > 18 ? "Adult" : "NOt Adult"
console.log(user)

// ================================= Switch Statement =======================================================================

const fruit = "Apple";
switch (fruit) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}

