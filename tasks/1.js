const binaryArrayToNumber = (arr) => {
    let string = arr.join("");
    return parseInt(string, 2);
};

console.log(binaryArrayToNumber([1, 1, 0, 1]));
