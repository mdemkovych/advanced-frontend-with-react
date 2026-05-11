/* Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments.
For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2,
for the 3rd - the function that returns the product of the first two arguments,
and the function can multiply both arrays and numbers.

The overloadedFunc() function returns the result of the default function. */

const functionProduct = (arr, val) => {
    if (Array.isArray(arr)) {
        return arr.map(el => el * val);
    } else {
        return arr * val;
    }
};

const overloadedFunc = (array = [1, 2, 3], val = 2, func = functionProduct) => func(array, val);

console.log(overloadedFunc());
console.log(overloadedFunc([2, 4, 6, 8]));
console.log(overloadedFunc([2, 4, 6], 3));
console.log(overloadedFunc(10));
console.log(overloadedFunc(8, 3));

const func = {
    sum: (a, b) => {
        if (Array.isArray(a)) {
            return a.map(el => el + b);
        } else {
            return a + b;
        }
    }
};

console.log(overloadedFunc(undefined, undefined, func.sum));
console.log(overloadedFunc(3, undefined, func.sum));
console.log(overloadedFunc(10, 5, func.sum));