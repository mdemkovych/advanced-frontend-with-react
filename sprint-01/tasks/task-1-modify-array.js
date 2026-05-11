/* Implement the getModifiedArray(array) function, which takes an arbitrary array and returns an array
with the value of the first element of the array equal to “Start”, the last element of the array equals to “End”
and the rest of elements should be the same as in an initial array. The initial array should stay unchanged. */

const getModifiedArray = (array) => {
    const arr = [...array];
    arr[0] = "Start";
    arr[arr.length - 1] = "End";
    return arr;
};

console.log(getModifiedArray([12, 6, 22, 0, -8]));
console.log(getModifiedArray(["Kate", "Peter", "Mark", "Sam"]));
console.log(getModifiedArray([false, 10, 'mail', true, 20, 30]));
console.log(getModifiedArray([100, 200]));

const arr1 = [false, 10, 'mail', true, 20, 30];
getModifiedArray(arr1);
console.log(arr1);

const arr2 = [100, 200];
getModifiedArray(arr2);
console.log(arr2);