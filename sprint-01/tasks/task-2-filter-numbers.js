/* The function filterByN receives an array of integers, a number and a parameter (greater, less).
Print a new array, where all elements will be greater/less than this number

By default, the number is 0, the parameter is greater.

Example:
filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater');  //[ 55]
filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less'); //  []
filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
filterNums([-2, 2, 3, 0, 43, -13, 6], 23);  // [43] */

const filterNums = (array, number = 0, param = "greater") => {
    return array.filter(item => param === "less" ? item < number : item > number);
};

console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 11, 'greater'));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 5, 'less'));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], -30, 'less'));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5]));
console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 9));