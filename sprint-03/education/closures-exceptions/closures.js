/* CLOSURES */
// Learning Note: A closure is a function that remembers its outer variables even after the outer function has finished executing.

/**
 * Creates a packing function that maintains its own storage state.
 * @param {Array} initialBoxes - The initial set of items in storage.
 * @returns {Function} A function to pack items.
 */
const createPacker = (initialBoxes) => {
    // upper memory storage
    // 'boxStorage' is captured by the closure of the returned 'pack' function.
    const boxStorage = [...initialBoxes]; 

    return function pack(item) {
        // inner memory storage
        if (boxStorage.length === 0) {
            return `Cannot pack ${item}: No boxes left!`;
        }
        const box = boxStorage.pop();
        return `${box}${item} packed. Boxes remaining: ${boxStorage.length}`;
    };
};

const packChocolate = createPacker(Array.from('🎁🎁🎁'));
const packFruit = createPacker(Array.from('📦📦'));

console.log(packChocolate('🍫')); 
console.log(packFruit('🍎')); 
console.log(packFruit('🍌')); 
console.log(packFruit('🍒')); // Should show "No boxes left"