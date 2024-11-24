const sumAll = function(numberOne, numberTwo) {
    // Check if numbers are negative or non-numbers
    if (numberOne <= 0 || numberTwo <= 0) return "ERROR";
    if (isNaN(numberOne) || isNaN(numberTwo)) return "ERROR";
    
    // Check if numbers are integers
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return "ERROR";

    let theSum = 0;

    const start = Math.min(numberOne, numberTwo);
    const end = Math.max(numberOne, numberTwo);

    // Sum all integers between numberOne and numberTwo, including both
    for (let i = start; i <= end; i++) {
        theSum += i;
    }
    return theSum;
};

// Do not edit below this line
module.exports = sumAll;
