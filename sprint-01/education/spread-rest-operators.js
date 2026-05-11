/* Spread operator & Rest operator */
// Learning Note: Spread operator expands iterables into individual elements. Rest operator collects multiple elements into an array.

/* SPREAD - "expands" values */
// add elements from existing arr to new arr
const additionalSubject = ['Philosophy', 'Psychology'];
const subjects = ['Math', 'Physics', ...additionalSubject];
console.log(subjects);

// copy arr
const baseNumbers = [1, 2, 3, 4, 5];
const copiedNumbers = [...baseNumbers];
copiedNumbers.push(10);
console.log(baseNumbers);
console.log(copiedNumbers);

// concat arr
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const mergedArray1 = firstArray.concat(secondArray);
const mergedArray2 = [...firstArray, 20, ...secondArray];
console.log(mergedArray1);
console.log(mergedArray2);

// passing array elements to a function
function perimeter(sideA, sideB, sideC) {
    return sideA + sideB + sideC;
}

const sides = [10, 20, 30];
console.log(perimeter(...sides));


/* REST - "collects" values */
function addExclamation(...elements) {
    return elements.map(el => el + '!');
}

console.log(addExclamation(1, 3, 'Hello', 'World'));