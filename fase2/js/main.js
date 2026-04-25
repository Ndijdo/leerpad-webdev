// Arrays
const myArray = []

// add elements to an array
myArray[0] = "ardo";
myArray[1] = 1001;
myArray[2] = false;
console.log(myArray) 

// refer to an array
console.log(myArray)

// lenght property
console.log(myArray.length)

// last element in an array
console.log(myArray[myArray.length - 1]);
console.log(myArray[myArray.length - 2]);
console.log(myArray[myArray.length - 3]);

console.log(myArray[1]);


// adding elements to an array
myArray.push("school"); // adding elements to the end of the array
myArray.unshift(42); // adding elements to the front of the array


console.log(myArray);


// remove elements from an array
myArray.pop(); // removing elements from the back
myArray.shift(); // removing elements from the beginning


console.log(myArray);


// moving elements from an array to const
const lastItem = myArray.pop();
const firstItem = myArray.shift();
console.log(firstItem)
console.log(lastItem);
console.log(myArray)


// delelting elements from array
delete myArray[0] // deleting element from array but elements stay in their spot.
console.log(myArray)
console.log(myArray[0])


// removing and replacing elements from an array
myArray.splice(1, 0, 42); // removing elements / replacing elements
console.log(myArray)
myArray.splice(2, 1, 42);
console.log(myArray)


// slicing arrays
const myArray = ['A','B','C','D','E','F'];
const newArray = myArray.slice(2,5);

console.log(newArray)


// reversing arrays
const myArray = ['A','B','C','D','E','F'];
myArray.reverse();

console.log(myArray)


// making an string from elements from an array
const myArray = ['A','B','C','D','E','F'];

const newString = myArray.join();

const newArray = newString.split(",");

console.log(newString) 
console.log(newArray) 


// adding different arrays together
const myArrayA = ['A', 'B', 'C'];
const myArrayB = ['D', 'E', 'F'];

const newArray = myArrayA.concat(myArrayB);
const newArrayA = [...myArrayA, ...myArrayB]

console.log(newArrayA)


// Nested arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
// or
console.log(clothesShelfB[0]); 

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]); // logging elements from a nested array
console.log(clothesDept[1][0]);

const sportStore = [equipDept, clothesDept]

console.log(sportStore[0][0][1])
console.log(sportStore[1][1][0])
