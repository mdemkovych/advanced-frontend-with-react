/* HOISTING */
// Learning Note: Hoisting moves declarations to the top of their scope. Temporal Dead Zone (TDZ) affects let/const before declaration.

// 1.Function declaration
personName("Maks"); // works HOISTING

function personName(name) {
    console.log(`The name of the person is ${name}`);
}

// personName("Maks");


// 2.Function expression
// someFE(); //- doesn't works
const someFE = function () {
    console.log("I am a function expression");
};

someFE();

// 3.Variables hoisting
console.log(x);
var x = 1; // undefined

// console.log(number); // ReferenceError
const number = 1; // let - the same as --const--