// Loops 

let myNumber = 50;
while(myNumber < 50 ) { 
    console.log(myNumber);
    /* myNumber = myNumber + 1; */
    /* myNumber++;  */
    myNumber += 2;
}

// Don't create an endless loop!


// do while loop
do { 
    console.log(myNumber);
} while(myNumber < 50);


// for loop
for (let i = 0; i <= 10; i++) { 
    console.log(i);
}

let name = "Ardo";
for (let i = 0; i < name.length; i++) { 
    console.log(name.charAt(i));
}


//while en if loops
let counter = 0;
let myLetter;
let name = "Ardo";
while (counter <= 3) { 
    myLetter = name[counter];
    console.log(myLetter);
    if (counter === 1) { 
        counter += 2;
        continue;
    }
    if (myLetter === "d") break;
    counter++;

}
console.log(counter);