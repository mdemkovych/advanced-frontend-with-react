/* EXCEPTIONS */
// Learning Note: Error handling allows a program to deal with unexpected situations gracefully using try...catch...finally.

// 1. Basic Structure
try {
    console.log("Starting secure operation...");
    // Potential risky code here
} catch (error) {
    // This block runs only if an error is thrown in 'try'.
    console.error("An error was caught:", error.message);
} finally {
    // This block ALWAYS runs, regardless of whether an error occurred.
    console.log("Operation cleanup complete.");
}


// 2. Custom Error Throwing
/**
 * Simulates a PIN verification process.
 * @param {string} pin - User input.
 * @throws {Error} If PIN is incorrect.
 */
const verifyPIN = (pin) => {
    const CORRECT_PIN = '1234';
    // const pin = prompt('Enter PIN'); for usage with exceptions.html
    if (pin === CORRECT_PIN) {
        return '🔓 Access Granted';
    } else {
        // Learning Note: 'throw' is used to manually trigger an exception.
        throw new Error('❌ Invalid PIN provided');
    }
};

try {
    const status = verifyPIN('0000');
    console.log(status);
} catch (error) {
    console.log(`Error Name: ${error.name}`);
    console.log(`Error Message: ${error.message}`);
}


// 3. Handling Undefined References
// Syntax Error is a higher priority than Exceptions

try {
    // Referencing a non-existent variable throws a ReferenceError.
    nonExistentFunction();
} catch (exception) {
    console.log(`Caught ${exception.name}: ${exception.message}`);
}