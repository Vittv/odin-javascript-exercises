const reverseString = function(string) {
    let splitString = string.split("");
    reverseArray = splitString.reverse();
    const finalString = reverseArray.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
