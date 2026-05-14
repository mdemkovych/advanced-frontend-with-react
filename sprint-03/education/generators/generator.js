/* GENERATORS */
// Learning Note: Generators are special functions that can be paused and resumed, allowing them to produce a sequence of values over time.

// 1. Basic Generator
function* simpleGenerator() {
    yield "Hello";
    yield "World";
    return "End of Stream";
}

const gen = simpleGenerator();
console.log(gen);
console.log(gen.next()); // { value: 'Hello', done: false }
console.log(gen.next()); // { value: 'World', done: false }
console.log(gen.next()); // { value: 'End of Stream', done: true }
console.log(gen.next()); // { value: 'undefined', done: true }


// 2. Iterating over Generators
// Learning Note: Generators are iterables, meaning they can be used with spread operators or for...of loops.
function* numberSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const numbersGen = numberSequence();
console.log('Iterating with spread:', [...numbersGen]);

// for ... of
const numbersGen2 = numberSequence();
for (const value of numbersGen2) {
    console.log(value);
}


// 3. Yield Delegation
// Learning Note: 'yield*' is used to delegate to another generator or iterable.
function* innerGen() {
    yield 'B';
    yield 'C';
}

function* outerGen() {
    yield 'A';
    yield* innerGen();
    yield 'D';
}

console.log('Delegated sequence:', [...outerGen()]); // ['A', 'B', 'C', 'D']


// 4. Infinite Data Streams
/**
 * Generator that produces Fibonacci numbers infinitely.
 */
function* fibonacciGenerator() {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;
        [current, next] = [next, current + next]; // Modern swap/update
    }
}

const fib = fibonacciGenerator();
console.log('First 5 Fibonacci numbers:');
for (let i = 0; i < 5; i++) {
    console.log(fib.next().value);
}