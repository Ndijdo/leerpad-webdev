// conditionals: Ternary Operator

//syntax
// condition? ifTrue : iffalse;

let soup = "chicken noodle soup";
let response = soup ? "Yes, we have soup." : "sorry, no soup todya.";
console.log(response);


// ternary operator with multiple conditions
let soup = "chicken noodle soup";
let isCustomerBanned = true; 
let soupAccess = isCustomerBanned 
? "Sorry, no soup for you!" 
: soup 
? `Yes, we have ${soup} today.`
: "Sorry, no soup today.";
console.log(soupAccess);


// grade calculator using ternary operator
let testScore = 90; 
let myGrade = testScore > 89 ? "A"
: testScore > 79 ? "B"
: testScore > 69 ? "C"
: testScore > 59 ? "D"
: "F";
console.log(`My test grade is a ${myGrade}.`);


// rock, paper, scissors game using ternary operator
let playerOne = "rock";
let computer = "rock"; 
let result = playerOne === computer ? "Tie game!"
: playerOne === "rock" && computer === "scissors" ? "Player one wins!"
: playerOne === "paper" && computer === "rock" ? "Player one wins!"
: playerOne === "scissors" && computer === "paper" ? "Player one wins!"
: "computer wins!"; 
console.log(result);