// Functions 

// Methods = Built-in Functions
"Ardo".toLowerCase();
Math.random();


// Function Declaration Syntax:
function sum(num1, num2) {
    if (num2 === undefined) {
        return num1 + num1
;    }
    return num1 + num2;
}
console.log(sum(5,10));

function getUserNameFromEmail(email) { 
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("User@Github.com"));

const getUserNameFromEmail = function (email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("User1@Github.com"));

const getUserNameFromEmail =  (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("User2@Github.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("ArDo"));
