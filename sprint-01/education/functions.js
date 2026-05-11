/* FUNCTIONS */
// Learning Note: Functions are first-class citizens in JS. Closures allow functions to access variables from an enclosing scope.

// 1.Function Declaration
function greeting(name) {
    return `Hello, ${name}!`;
}

// Usage
console.log(greeting('John')); // "Hello, John!"

// Function with multiple parameter, default params
function calculate(b, a = 10, operation = 'add') {
    console.log(arguments); // arguments - build in a pseudo-array
    switch(operation) {
        case 'add': return a + b;
        case 'subtract': return a - b;
        default: return 0;
    }
}
console.log(calculate(10));

// Pure function
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2));


// 2.Function Expression
// Anonymous Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Named Function Expression
const calculator = function calc(num1, num2) {
    return num1 + num2;
};
console.log(calculator(1, 2));

// Arrow Function Expression
const multiply = (num1, num2) => num1 * num2;

// Function Expression with default parameters
const divide = function(num1, num2 = 1) {
    return num1 / num2;
};
console.log(divide(10, 2));

// Usage
console.log(greet('Jane')); // "Hello, Jane!"
console.log(multiply(5, 3)); // 15


// 3.Arrow function
// Arrow functions doesn't have object {this} and function {arguments}.
// They inherit this from the context in which they were created.
// This is convenient in callbacks, but not suitable for object methods.

const arrowFunction = (num1, num2) => num1 + num2;
console.log(arrowFunction(1, 2));

const arrowGreet = name => `Привіт, ${name}!`;
console.log(arrowGreet('John'));

const obj = {
    i:10,
    b: () => {
        try {
            console.log(this.i, this);
        } catch (error) {
            console.error('Помилка в методі b:', error.message);
        }

    },
    c: function() {
        console.log(this.i, this);
    }
};

obj.b();
obj.c();

// arrow function can return obj
// let arrF = a => ({value: 100 + a});


// 4.IIFE (Immediately Invoked Function Expression)
// Basic IIFE
(function() {
    console.log('This runs immediately!');
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})('John');

// IIFE with a default parameter (very unique construction)
(value = function(val = 10) {
    console.log(`Number is ${val}`);
    return val;
})();

value(5); // value has a function
console.log(value()); // Number is 10 && 10

// IIFE with arrow function
(() => {
    console.log('Arrow function IIFE');
})();

// IIFE that returns a value
const result = (function() {
    const num1 = 5;
    const num2 = 3;
    return num1 + num2;
})();

console.log(result); // can be called a second time

// IIFE with private scope
const counter = (function() {
    let count = 0; // Private variable

    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
})();

// usage
console.log(counter.getValue()); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.count); // undefined (private!)


// 5.Overloading Function in JS
/*function doSomething(num1, num2) { // not active when overloading
    return [num1, num2]; // [1, 2] without overloading
}*/

function doSomething({num1, num2}) { // active
    return [num1, num2];
}

console.log(doSomething({num1: 1, num2: 2}));

function overDoSomething(param1, param2) {
    if (typeof param1 === 'object') { // === - strict equality
        return [param1.a, param1.b];
    }
    else {
        return [param1, param2];
    }
}

console.log(overDoSomething(1, 2));
console.log(overDoSomething({a: 1, b: 2}));


// 6.Function Composition
// ramda - library for working with functions
// import { compose, pipe } from 'ramda';
function appendA(value) {
    value += 'a';
    return value;
}

function appendB(value) {
    value += 'b';
    return value;
}

function appendC(value) {
    value += 'c';
    return value;
}
console.log(appendA('_'));
console.log(appendB(appendA('_')));
console.log(appendC(appendB(appendA('_'))));

// const compVal1 = compose(appendA, appendB, appendC);
// console.log(compVal1('_'));
//
// const compVal2 = compose(appendC, appendB, appendA)('_');
// console.log(compVal2);
//
// // // compose - Combines functions from right to left (←)
// // compose(console.log, appendC, appendB, appendA)('_');
// //
// // // pipe - Combines functions from left to right (→)
// // pipe(appendA, appendB, appendC, console.log)('_');