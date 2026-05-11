/* VARIABLE DECLARATION */
// Learning Note: 'let' and 'const' provide block scope, unlike 'var' which is function scoped. Always prefer 'const' by default.

// 1. LET (Recommended for variables that need to be reassigned)
// Block-scoped and can be reassigned
let age = 25;
age = 26; // Valid - can be reassigned

// Can be declared without an initial value
let score;
score = 100;

// Block scoping example
{
    let blockScoped = "only available inside this block";
}
// blockScoped is not accessible here


// 2. CONST (Recommended for values that shouldn't change)
// Block-scoped and cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error: Cannot reassign a constant

// For objects and arrays, the reference is constant but properties can be modified
const user = { name: "John" };
user.name = "Jane"; // Valid - modifying properties is allowed
// user = {}; // Error: Cannot reassign the reference

const numbers = [1, 2, 3];
numbers.push(4); // Valid
// numbers = []; // Error: Cannot reassign the reference


//3. VAR (Not Recommended in Modern JavaScript)
// No block scope and can be reassigned
var count = 1;
count = 2; // Valid

// Hoisted to the top of its scope (but with undefined)
console.log(hoisted); // undefined
var hoisted = "I am hoisted";

// Not blockScoped
{
    var notBlocked = "I'm accessible outside";
}

console.log(notBlocked); // Works