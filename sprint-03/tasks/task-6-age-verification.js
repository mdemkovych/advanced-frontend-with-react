/* Write a checkAdult(age) function whose input parameter is the age of the user age. The function checks whether
the set age parameter is set correctly, if it is set incorrectly, the corresponding error should be generated. */

const checkAdult = (age) => {
    try {
        if (age === undefined || age === null || age === '') {
            throw new Error("Please, enter your age");
        }
        
        const numericAge = Number(age);
        
        if (isNaN(numericAge)) {
            throw new Error("Please, enter number");
        }
        if (numericAge < 0) {
            throw new Error("Please, enter positive number");
        }
        if (!Number.isInteger(numericAge)) {
            throw new Error("Please, enter Integer number");
        }
        if (numericAge < 18) {
            throw new Error("Access denied - you are too young!");
        }

        console.log("Access allowed");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("Age verification complete");
    }
};

checkAdult(20);
checkAdult(15);
checkAdult(-5);
checkAdult("abc");