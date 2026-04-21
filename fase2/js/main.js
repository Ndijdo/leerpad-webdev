// Conditionals : If Statements

// Syntax
if (condition) { 
    // run some code
} else { 
    // run some different code
}


// Challenge: Soup
let customerIsBanned = true;
let soup = 'chicken noodle'
let crackers = true;
let reply; 

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crakcers.`;
}else if (soup) {
    reply = `Here's your order of ${soup}`;
} else { 
    reply = "Sorry, we're out of soup.";
}

console.log(reply);


// Challenge: Grade Assigner
let testScore = 89;
let collegeStudent = true;
let grade;

if(testScore >= 90) {
    grade = 'A';
} else if (testScore >= 80) {
    grade = 'B';
} else if (testScore >= 70) {
    grade = 'C';
} else if (testScore >= 60) {
    grade = 'D';
} else {
    // Nested If Statemets
    if (collegeStudent) {
         grade = 'U'
    } else { 
        grade = 'F' 
    }
}

console.log(grade);


// Decision tree! 
if (playerOne === computer) { 
    // tie
} else if (playerOne === 'rock') {
    if (computer === 'paper') {
        // computer one wins
    } else {
        // player one wins
    }
} else if (playerOne === 'paper') { 
    if (computer === 'scissors') {
        // computer one wins
    } else {
        // player one wins
    }   
} else { 
    if (computer === 'rock') {
        // computer one wins
    } else {
        // player one wins
    }
}