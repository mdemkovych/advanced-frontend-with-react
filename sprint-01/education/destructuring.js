/* DESTRUCTURING */
// Learning Note: Destructuring Assignment extracts values from arrays or properties from objects into distinct variables.

// 1. OBJECT
const person = {
    age: 25,
    isMarried: true
};

console.log(person); // { age: 25, isMarried: true }

// we can change params, for ex. age: userAge, isMarried: hasPartner
const { age: userAge, isMarried: hasPartner } = person;
console.log(userAge, hasPartner); // 25 true

// clear assignment
const personAge = person.age;
const personIsMarried = person.isMarried;


// 2.ARRAY
const numbers = [1, 2, 3];
const [firstNum, secondNum, thirdNum, fourthNum = "default"] = numbers;
console.log(firstNum, secondNum, thirdNum, fourthNum); // 1 2 3 default

// skipping elements
const [firstItem, , thirdItem] = numbers;
console.log(firstItem, thirdItem); // 1 3

numbers.push(4)

// ... - rest
const [firstElement, ...restElements] = numbers;
console.log(firstElement, restElements); // 1 [ 2, 3, 4 ]


// 3.exchange of variables with values
let firstVal = 1;
let secondVal = 2;
[firstVal, secondVal] = [secondVal, firstVal];
console.log(firstVal, secondVal); // 2 1


// 4.function parameters
const student = {
    fullName: {
        firstName: "John",
        lastName: "Doe"
    },
    direction: "Programing",
    nickname: "Johnny"
};

function studentDirection({direction}) {
    return direction;
}

console.log(studentDirection(student)); // programing

// fullName:{firstName, lastName}
function whois({nickname, fullName:{firstName, lastName: surname}}) {
    return `${firstName} ${surname} is known as ${nickname}`;
}

console.log(whois(student)); // John Doe is known as Johnny