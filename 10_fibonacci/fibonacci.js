const fibonacci = function(givenNumber) {
    // Convert the input to a number
    givenNumber = Number(givenNumber);

    // Handle edge cases
    if (givenNumber === 0) return 0;
    if (givenNumber === 1) return 1;
    if (givenNumber < 0) return "OOPS";

    // Track the sequence
    let previous = 0, current = 1;

    Array(givenNumber - 1).fill(0).forEach(() => {
        let next = previous + current;
        previous = current; // Update previous
        current = next;     // Update current
    });

    return current; // Return the final number
};

// Do not edit below this line
module.exports = fibonacci;
