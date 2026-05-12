/* Example */
// Learning Note: Demonstrating object literals, function context, and destructuring.

const primaryUser = {
    name: "Maksym",
    age: 21,
}

const secondaryUser = {
    name: "Maks",
    age: 22,
}

console.log(primaryUser);

function getPersonSummary(user) {
    return user.name + user.age;
}

console.log(getPersonSummary(primaryUser));

// Destructuring can be used in function parameters to extract specific properties.
function getAge({age}) {
    return age;
}

console.log(getAge(primaryUser));

// Property renaming during destructuring.
function getRenamedPersonInfo({age: userAge, name}) {
    return name + userAge;
}

console.log(getRenamedPersonInfo(primaryUser));

function printDetailedInfo() {
    console.log("------");
    // arguments' is a local variable available within all (non-arrow) functions.
    console.log(arguments);
    console.log(this);
    return this.name + this.age;
}

// Using .call() to provide a custom 'this' context.
console.log(printDetailedInfo.call({name: "Maksym", age: 21}));
console.log(printDetailedInfo.call(secondaryUser)); // Explicitly binding context