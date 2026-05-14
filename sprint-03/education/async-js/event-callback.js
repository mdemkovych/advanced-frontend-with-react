/* EVENTS and CALLBACKS */
// Learning Note: Callbacks are functions passed as arguments to other functions to be executed later.

// 0. Event - example works inside index.html (where document exist)

// document.addEventListener('click', event => {
//     console.log('Clicked at', event.clientX, event.clientY);
// });

// 1. Basic Callback
/**
 * Simulates data fetching with a callback.
 * @param {Function} callback - The function to run after data is "loaded".
 */
const simulateDataFetch = (callback) => {
    setTimeout(() => {
        const data = '✅ Data successfully loaded';
        callback(data);
    }, 1000);
};

simulateDataFetch((result) => console.log(result)); // (result) => console.log(result)('✅ Data successfully loaded')


// 2. Callback Hell Example
// Learning Note: Deeply nested callbacks (Callback Hell) make code difficult to read and maintain.
const executeStep1 = (value, callback) => setTimeout(() => callback(value + 1), 500);
const executeStep2 = (value, callback) => setTimeout(() => callback(value + 2), 500);
const executeStep3 = (value, callback) => setTimeout(() => callback(value + 3), 500);

console.log('Starting multi-step process...');
executeStep1(0, result1 => {
    executeStep2(result1, result2 => {
        executeStep3(result2, result3 => {
            console.log('Final Result (Callback Hell):', result3);
        });
    });
});