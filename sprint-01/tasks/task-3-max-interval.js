/* Find the maximum interval between two consecutive arguments.

Example:

maxInterv(3, 5, 2, 7); //5
maxInterv(3, 5, 2, 7, 11, 0, -2); //11
maxInterv(3, 5); //2
maxInterv(3); //0 */

const maxInterv = (...args) => {
    if (args.length < 2) return 0;
    
    let maxDiff = 0;
    for (let i = 1; i < args.length; i++) {
        const diff = Math.abs(args[i] - args[i - 1]);
        if (diff > maxDiff) {
            maxDiff = diff;
        }
    }
    return maxDiff;
};

console.log(maxInterv(3, 5, 2, 7));
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2));
console.log(maxInterv(3, 5));
console.log(maxInterv(3));
console.log(maxInterv(3, 5, 2, 8));
console.log(maxInterv(3, 5, 2, 37, 11, 0, -2));
console.log(maxInterv(8));