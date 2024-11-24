const removeFromArray = function(targetedArray, ...elementRemoved) {
    const newArray = [];
    targetedArray.forEach((item) => {
        if (!elementRemoved.includes(item)) {
            newArray.push(item);    
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
