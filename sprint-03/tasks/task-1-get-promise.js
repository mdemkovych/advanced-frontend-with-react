/* Implement the getPromise(delay, message) function, which takes an integer number delay (between 0 and 2000)
and string message and returns a Promise that waits for a specified amount of time (using delay argument)
and resolves with the message. */

const getPromise = (delay, message) => {
    return new Promise((resolve, reject) => {
        if (typeof delay !== 'number' || delay < 0 || delay > 2000) {
            reject(new Error("Delay must be a number between 0 and 2000"));
        } else {
            setTimeout(() => resolve(message), delay);
        }
    });
};

getPromise(2000, "hello").then(data => console.log(data));
getPromise(1000, "world").then(data => console.log(data));