/* Async Await */
// Learning Note: 'async' functions always return a promise. 'await' pauses the execution until the promise is settled.

/**
 * Demonstrates basic async/await usage with error handling.
 */
async function loadUserData() {
    try {
        console.log('Fetching user data...');
        // Learning Note: await simplifies working with asynchronous results.
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log('Data received, parsing JSON...');
        const userData = await response.json();
        console.log('User Data:', userData);
    } catch (error) {
        // Learning Note: try/catch is the standard way to handle errors in async/await.
        console.error('Failed to load data:', error.message);
    }
}

loadUserData();
console.log('Execution continues without waiting for loadUserData to finish (non-blocking).');