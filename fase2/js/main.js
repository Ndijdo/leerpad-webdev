// Conditionals: Switch Statements

// Syntax 
switch (2) { 
    case 1: 
        // run this code
        console.log("1");
        break;

    case 2:
        // run this code
        console.log("2");
        break;

    case 3:
        // run this code
        console.log("3");
        break;

    default:
        // run this code if all choices are false  
        console.log("no match")    
}

// Syntax 2.0
switch (Math.floor(Math.random() * 5 + 1)) { 
    case 1: 
        // run this code
        console.log("1");
        break;

    case 2:
        // run this code
        console.log("2");
        break;

    case 3:
        // run this code
        console.log("3");
        break;

    default:
        // run this code if all choices are false  
        console.log("no match")    
}

let playerOne = "rock";
let playerTwo = "scissors";

switch (playerOne) {
    case "rock":
        switch (playerTwo) {
            case "rock":
                console.log("It's a tie!");
                break;
            case "paper":
                console.log("Player Two wins!");
                break;
            case "scissors":
                console.log("Player One wins!");
                break;
        }
        break;
    case "paper":
        switch (playerTwo) {
            case "rock":
                console.log("Player One wins!");
                break;
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("Player Two wins!");
                break;
        }
        break;
    case "scissors":
        switch (playerTwo) {
            case "rock":
                console.log("Player Two wins!");
                break;
            case "paper":
                console.log("Player One wins!");
                break;
            case "scissors":
                console.log("It's a tie!");
                break;
        }
        break;
    default:
        console.log("Invalid choice for Player One");
}