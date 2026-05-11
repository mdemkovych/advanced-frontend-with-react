/* Implement 5 functions that take strings of data and process them in a certain way.

1) The upperCase() function takes string data as an argument and returns it to uppercase.
2) The tripleExclaim() function takes string data as an argument and returns it by adding three exclamation marks to it.

3) The split() function takes a separator as an argument, returns a function that accepts string data split
by the separator character into an ordered set of substrings, and returns an array of those substrings.

4) The join() function takes separator as an argument, returns a function that takes an array of string data that
are concatenated into a string by separator, and returns that string.

5) The copy() function takes string data as an argument and returns it repeating 2 times.

Implement the createComposition() function, which can take any number of functions as arguments,
and create a composition from them. The createComposition() function takes our 5 functions as arguments.
The createComposition() function returns a function that takes its initial value as an argument.
This nested function successively passes through an array of functions with each iteration returning the result
of calling the accumulated value of the current function argument. The reduce() method can be used here.

The final function result is assigned the function createComposition(), which takes our 5 functions as arguments
in the appropriate order. (split with '_' argument, join with ' ' argument)

Tips.

Consider that the result of one function can be passed as an argument to another function.
Pay attention to the order of the function arguments.
If you have difficulty implementing the createComposition() function, check out the "Useful links" for the material on function composition.

Usage example:

// implementation of 5 atomic functions
// implementation of createComposition function

const result = createComposition( // 5 function-arguments )

console.log(result("buy_ticket_now"));  //  BUY TICKET NOW!!! BUY TICKET NOW!!!
console.log(result("total sale")); //  TOTAL SALE!!! TOTAL SALE!!! */

const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => `${str}!!!`;
const split = (separator) => (str) => str.split(separator);
const join = (separator) => (arr) => arr.join(separator);
const copy = (str) => `${str} ${str}`;

/**
 * Creates a composition of the given functions.
 * @param {...Function} funcs - Functions to compose.
 * @returns {Function} A function that executes the composed sequence from left to right.
 */
const createComposition = (...funcs) => (initialValue) =>
    funcs.reduce((acc, fn) => fn(acc), initialValue);

const result = createComposition(
    split('_'),
    join(' '),
    upperCase,
    tripleExclaim,
    copy
);

console.log(result("buy_ticket_now"));  //  BUY TICKET NOW!!! BUY TICKET NOW!!!
console.log(result("total sale"));      //  TOTAL SALE!!! TOTAL SALE!!!