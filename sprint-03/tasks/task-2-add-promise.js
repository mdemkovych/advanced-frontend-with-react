/* Write an add(x, y) function that takes two arguments x and y. The function should return a Promise that
resolves with the sum of the two arguments if they are Numbers, or rejects with the message "Error!" otherwise. */

const add = (x, y) => {
    return new Promise((resolve, reject) => {
        if (typeof x === 'number' && typeof y === 'number') {
            resolve(x + y);
        } else {
            reject("Error!");
        }
    });
};

add(2, 2).then(res => console.log('Sum:', res));
add(2, "a").catch(err => console.log('Rejected:', err));
add("b", "a").catch(err => console.log('Rejected:', err));