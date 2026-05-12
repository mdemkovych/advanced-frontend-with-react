/* === CALL, APPLY, BIND: MASTER EXAMPLE === */
// Learning Note: call(), apply(), and bind() are methods used to explicitly set the 'this' context of a function.

const user = {
    firstName: "Maksym",
    lastName: "Demkovych",

    // 1. Regular Function: 'this' is dynamic.
    // It points to the object that calls the method (user).
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    // 2. Arrow Function: 'this' is inherited from the surrounding code.
    // It inherits 'this' from the scope where the object was defined (usually window/global).
    // ARROW FUNCTIONS ARE GENERALLY BAD FOR OBJECT METHODS if you need 'this'.
    getFullNameArrow: () => {
        // In a browser, 'this' here is the Window object.
        // It will return "undefined undefined" because window.firstName doesn't exist.
        return `${this.firstName} ${this.lastName}`;
    }
};

/**
 * External function that requires a context (this) to work.
 * It expects 'this' to have a getFullName() method.
 */
function logInfo(position, experience) {
    console.log(`User: ${this.getFullName()}`);
    console.log(`Role: ${position} | Experience: ${experience} years.`);
    console.log('----------------------------');
}

// --- 1. .call() ---
// Invokes the function immediately.
// Arguments are passed individually.
console.log("--- CALL DEMO ---");
logInfo.call(user, "Software Engineer", 5);


// --- 2. .apply() ---
// Invokes the function immediately.
// Arguments are passed as an ARRAY.
console.log("--- APPLY DEMO ---");
const args = ["Project Manager", 10];
logInfo.apply(user, args);


// --- 3. .bind() ---
// Does NOT invoke the function immediately.
// Returns a NEW function with 'this' locked to the provided object.
console.log("--- BIND DEMO ---");
const logMaksymAsStudent = logInfo.bind(user, "Student");
// You can provide some arguments now, and others later:
logMaksymAsStudent(1);


/* === THE ARROW FUNCTION PITFALL === */

console.log("--- ARROW FUNCTION VS CALL ---");

// This fails because the arrow function's 'this' is already set to the global scope.
console.log("Direct call:", user.getFullNameArrow());

// Even using .call() cannot change 'this' for an arrow function!
// It will still try to find firstName on the global/window object.
console.log("Using .call() on arrow:", user.getFullNameArrow.call(user));