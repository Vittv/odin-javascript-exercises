const palindromes = function (string) {
    // Clean the string, making it all lowercase and free of punctuation
    const cleanedString = string
        .toLowerCase()
        .split("")
        .filter(char => (char >= "a" && char <= "z") || (char >= "0" && char <= "9"))
        .join("")

    // Reverse it
    const invertedString = cleanedString.split("").reverse().join("");

    // Compare both
    return cleanedString === invertedString
};

// Do not edit below this line
module.exports = palindromes;
