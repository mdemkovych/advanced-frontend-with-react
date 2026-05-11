/* TEMPLATE LITERALS */
// Learning Note: Template literals allow embedded expressions and multiline strings using backticks.

// multi row
console.log('string text line 1\n' +
    'string text line 2');

console.log(`string text line 1
string text line 2`);


// interpolation - ${}
const val1 = 5;
const val2 = 10;

console.log('Fifteen is ' + (val1 + val2) + ' and\nnot ' + (2 * val1 + val2) + '.');
console.log(`Fifteen is ${(val1 + val2)} and\nnot ${(2 * val1 + val2)}.`);


// templates with attachment
function isOnline() {
    return true;
}

const isAdmin = true;

// ternary operator - (condition ? expr1 : expr2)
let welcomeMessage = 'Welcome ';
welcomeMessage += (isOnline() ?
    'you are online ' + (isAdmin ? '(admin)' : '(user)')
    : 'you are offline') + '.';

console.log(welcomeMessage);

// Template Literals example - ${}
// Clean Code: Extracted complex ternary logic into variables for better readability
const userRole = isAdmin ? '(admin)' : '(user)';
const statusMessage = isOnline() ? `you are online ${userRole}` : `you are offline`;
const dynamicWelcomeMessage = `Welcome ${statusMessage}.`;

console.log(dynamicWelcomeMessage);


// Tagged literals
let personName = 'Maks';
let personAge = 21;

function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // Hello, my name is
    let str1 = strings[1]; // and I am
    let str2 = strings[2]; // years old.

    const ageStr = () => {
        if (personAge >= 18) {
            return 'adult'
        } else {
            return 'child'
        }
    }

    // return str0 + personExp + str1 + ageStr() + '! ' + 'I am ' + ageExp + ' years old.';
    return str0 + personExp + str1 + ageStr() + '! ' + `I am ${ageExp} years old.`;
}

// equal to - myTag(["Hello, my name is ", " and I am ", " years old."], personName, personAge);
let output = myTag`Hello, my name is ${personName} and I am ${personAge} years old.`;

console.log(`Hello, my name is ${personName} and I am ${personAge} years old.`);
console.log(output);