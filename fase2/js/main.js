//  var, let and const

/* const x = 1;
x = 2;
console.log(x); */

// global scope
var x =1;
//let y = 2;
//const z = 3;


// local scope
{
    let y = 4;
    console.log(y);
}

// local scope function 
function myFunc () {
    const z = 5;
    console.log(z)

    // local scope
    {
        let y = 6;
        console.log(y);
    }
}

myFunc();

var x = 1; // Function scoped
let y = 2; // Block scoped
const z = 3; // Block scoped

console.log(`global; ${x}`);
console.log(`global; ${y}`);
console.log(`global; ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;
    {
        var x = 11; // Funcion scoped
        const z = 6; // block scoped
        console.log(`block; ${x}`);
        console.log(`block; ${y}`);
        console.log(`block; ${z}`);
    }
    console.log(`function; ${x}`);
    console.log(`function; ${y}`);
    console.log(`function; ${z}`);
}

myFunc()