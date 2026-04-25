// Objects 
// key-value pairs in curly braces 
const myObj = { name: "Ardo"}

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["eat", "sleep", "code"],
    beverage: {
        morning : "coffee",
        afternoon: "iced tea"
    },
    action: function() {
        return "Hello world!";
    },
    action1: function() {
        return `Time for ${this.beverage.morning}`;
    }
};
console.log(anotherObj.hobbies[1])
console.log(anotherObj["alive"])
console.log(anotherObj.action())
console.log(anotherObj.action1())


// 
const vehicle = {
    wheels: 4, 
    engine: function() {
        return "vrroooom!";
    }
}


const truck = Object.create(vehicle);
truck.doors = 2;

console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4,
car.engine = function () {
    return "Whooossshh!"
};
console.log(car.engine());


const tesla = Object.create(car);
console.log(tesla.wheels);
tesla.engine = function() { 
    return "Shhhh....."
}
console.log(tesla.engine()); 


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) { 
    console.log(` on ${job}, it's ${band[job]}!`);

}


// destructuring Object
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

const { guitar: myVariable, bass: myBass } = band;
const { vocals, guitar, bass, drums} = band;

console.log(myVariable)
console.log(myBass)
console.log(guitar);
console.log(vocals);

function sings({vocals }) { return `${vocals} sings!`};
console.log(sings(band));