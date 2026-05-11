/* The function takes any number of strings and returns the sum of their lengths.

Example:

console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16 */

const sumOfLen = (...args) => args.join('').length;

console.log(sumOfLen('hello', 'hi'));
console.log(sumOfLen('hi'));
console.log(sumOfLen());
console.log(sumOfLen('hello', 'hi', 'my name', 'is'));
console.log(sumOfLen('hello', 'hi', 'my name', 'is2'));
console.log(sumOfLen('hello', 'my name', 'is'));
console.log(sumOfLen('hello', 'my name'));