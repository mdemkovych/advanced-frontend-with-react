/* Please, implement a function combineFunctions that takes any number of functions as an argument
and returns a function that is a composition of the arguments.

For example:

negate = function(x){ return -x; };
halve = function(x){ return x / 2; };
square = function(x){ return x * x; };
double = function(x){ return 2 * x; };

combineFunctions(negate, halve, square) should return a function
    square(halve(negate(x)))

combineFunctions(negate, double) should return a function
    double(negate(x))) */

/**
 * Creates a composition of the given functions.
 * @param {...Function} funcs - An arbitrary number of functions to compose.
 * @returns {Function} A function that takes an initial value and applies the composed functions from left to right.
 */
const combineFunctions = (...funcs) => (initialValue) =>
    funcs.reduce((value, fn) => fn(value), initialValue);

console.log(combineFunctions(x => x + 5)(3));
console.log(combineFunctions()(3));
console.log(combineFunctions(x => x + x, x => x - 1, x => x !== 0)(5));
console.log(combineFunctions(x => x + x, x => x - 1, x => x = -x, x => 'Hello, ' + x)(5));