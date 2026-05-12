/* Implement the getMin(arr) function, which takes an array of numbers arr
and returns the smallest number of the array. To solve the problem, you must use
one of the methods to specify the context of this. It is forbidden to use any cycles. */

const getMin = (arr) => Math.min.apply(null, arr);

console.log(getMin([12, 6, 22, 13, 7]));
console.log(getMin([12, -10, 32, 0.5, -77, 0, -44]));