/* PROMISES */
// Learning Note: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
// fetch() and json() - повертає браузерний Promise

// 1. Creating a Promise
const randomOutcomePromise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    setTimeout(() => {
        if (isSuccess) resolve('🎉 Success: Operation completed!');
        else reject(new Error('💥 Error: Operation failed!'));
    }, 1000);
});

randomOutcomePromise
    .then(result => {
        console.log(result);
        return `${result} (Enhanced)`;
    })
    .then(enhancedResult => console.log(enhancedResult))
    .catch(error => console.error(`${error.name}: ${error.message}`))
    .then(() => console.log('Recovered from the error!'))
    .finally(() => console.log('Cleanup: Operation attempt finished.'));

// Quick settled promises
// Promise.resolve(42).then(console.log);
// Promise.reject('err').catch(console.error);

// 2. Thenables
// Learning Note: A "thenable" is any object that has a .then() method. Promises can resolve other thenables.
const createThenable = (value) => ({
    then: (resolve) => resolve(value)
});

const myThenable = createThenable("I am a thenable");

myThenable.then(value => console.log(value));

Promise.resolve(myThenable).then(val => console.log('Resolved Thenable:', val));


// 3. Promise Chaining
/**
 * Simulates a step-by-step process using Promises.
 * @param {any} value - Initial value.
 * @returns {Promise}
 */
const processValue = (value) => Promise.resolve(value);

processValue(0)
    .then(val => [val])                // [0]
    .then(arr => arr.concat(1))        // [0, 1]
    .then(arr => arr.concat(2))        // [0, 1, 2]
    .then(finalArr => {
        console.log('Chained Result:', finalArr);
        return finalArr;
    })
    .then(result => console.log('Final Result:', result))
    .then(res => console.log(res)) // logs: undefined


// 4. Concurrency Methods: .all and .race
/**
 * Mock fetch function.
 */
const mockFetch = (tag, delay) => new Promise(resolve => setTimeout(() => resolve(tag), delay));

const requestA = mockFetch('Response A', 1000);
const requestB = mockFetch('Response B', 500);

// Promise.all() waits for ALL promises to resolve.
Promise.all([requestA, requestB]).then(results => {
    console.log('Promise.all results:', results);
});

// Promise.race() resolves/rejects as soon as the FIRST promise settles.
Promise.race([requestA, requestB]).then(winner => {
    console.log('Promise.race winner:', winner);
});