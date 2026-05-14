/* Implement the take() function that converts a sequence of iterated values into a sequence of length n. */

function* take(n, iterable) {
    let count = 0;
    for (const item of iterable) {
        if (count++ >= n) break;
        yield item;
    }
}

const characters = ['a', 'b', 'c', 'd'];

console.log('Taking 2:');
for (const x of take(2, characters)) {
    console.log(x);
}

console.log('Taking 3:');
for (const x of take(3, characters)) {
    console.log(x);
}