let favMovie = (name = "world", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}`);

favMovie("Regan", "Diapers");
    
let getFirstName = (name) => {
    let namearray = name.split(' ');
    return namearray[0];
}

let getFirstNameConcise = name => name.split(' ')[0];

console.log(getFirstName("Regan Loper"));
console.log(getFirstNameConcise("Regan Loper"));

let getStats = (a, b) => ({
    exponent: a ** b,
    product: a * b
});

let result = getStats(4, 2);
console.log(`The exponent result is ${result.exponent} and the product is ${result.product}`);


function printDetails(name, location, favFood) {
    console.log(`Hi, I'm ${name}, I live in ${location} and my favorite food is ${favFood}`);
}

let arr = ["Paul", "Birmingham", "Kimchi"];

printDetails(...arr);

let name = "Regan";

let spreadString = (string) => {
    let arr = [...string];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);   
    }
}

spreadString(name);