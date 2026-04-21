// Numbers

// An interger is a whole number
const myNumber = 42;

// A number with a decismal point is a float which references the "floating point"
const myFloat = 42.0123;

const myString = "42.123abc";

console.log(myNumber);
console.log(myFloat);
console.log(myNumber === myFloat);
console.log(myNumber === myString);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
console.log(Number("Ardo"));
console.log(Number(undefined));
console.log(Number(true));
console.log(Number(false));

// Number Methods
// The Number.isinterger() method determines whether the passed value is an integer.
console.log(Number.isInteger(myString));


// The Number.parseFloat() method parses an argumnet and returns a floating point number. 
// If a number cannot be parsed from the argument, it returns NaN.
console.log(Number.parseFloat(myNumber));


// The toFixed() method formats a number according to how many decimal points you provide as the parameter.
console.log(myFloat.toFixed(2));


// The Number.parseInt() method parses a string argument and returns an integer.
console.log(Number.parseInt(myString));


// The toString() method returns a string representing the number.
console.log(myFloat.toString());
console.log(typeof myFloat.toString());


// Chaining = Using several methods chained together.
console.log(Number.parseFloat("42.123abc").toFixed(2).toString());

 
//NaN is an acronym for Not a Number. 
console.log(Number("Ardo")); 


// The Number.isNaN() method determines whether the passed value is NaN and its type is Number.
console.log(Number.isNaN("Ardo"))


// The global isNaN() function determines whether a value is NaN or not.
console.log(isNaN("Ardo"));